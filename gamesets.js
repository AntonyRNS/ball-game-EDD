
/**
 * Define as configurações padrão do jogo, como tamanho das traves, quantidade de bolas e velocidade delas quando
 * o botão reset é chamado.
 * @param {
 * } event 
 * @param {Object[]} balls 
 * @param {Object[]} team_red 
 * @param {Object[]} team_blue 
 * @param {number} setVelocidadeVermelha 
 * @param {number} setVelocidadeAzul 
 */


export function configuracaoPadrao(event, balls, team_red, team_blue, setVelocidadeVermelha, setVelocidadeAzul) {
    if (event) event.preventDefault()


    balls.length = 0


    team_red.h = 300
    team_red.checarY()

    team_blue.h = 300
    team_blue.checarY()


    setVelocidadeVermelha(10)
    setVelocidadeAzul(10)


    team_blue.balls_count = 1
    team_red.balls_count = 1


    document.querySelector('#qtd-bolas-verm').value = 1
    document.querySelector('#qtd-bolas-azuis').value = 1
    document.querySelector('#vlc-bolas-verm').value = 10
    document.querySelector('#vlc-bolas-azuis').value = 10
    document.querySelector('#input-trave-verm').value = 300
    document.querySelector('#input-trave-azul').value = 300
}


/**
 * 
 *Define as configurações da trave vermelha assim como alinha com o eixo Y.
 */
export function definirTimeVermelho(event, team_red) {
    event.preventDefault()
    let alturaVermelho = parseInt(document.querySelector('#input-trave-verm').value)
    team_red.h = alturaVermelho
    team_red.checarY()
}

/**
 * 
 *Define as configurações da trave azul assim como alinha com o eixo Y.
 */
export function definirTimeAzul(event, team_blue) {
    event.preventDefault()
    let alturaAzul = parseInt(document.querySelector('#input-trave-azul').value)
    team_blue.h = alturaAzul
    team_blue.checarY()
}
