const d = document;

export default function digitalDraw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector);
        const random = Math.floor(Math.random() * $players.length);
        const winner = $players[random];

        return winner.textContent;
    };

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            console.info('Ganador:', result);
        }
    });
}
