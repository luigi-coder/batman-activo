const d = document;

const sound_batman = d.querySelector('.bati_encendido');

const sound_boton = d.querySelector('.bati_click');

const batman = d.querySelector('.batman');

const bati_btn = d.querySelector('.bati_boton');

bati_btn.addEventListener('click', () => {
    batman.classList.toggle('batman-activo');

    // currentTime = 0; Reiniciar el sonido al principio
    batman.classList.contains('batman-activo')
        ? (sound_batman.play(), sound_boton.play())
        : (
            sound_batman.pause(), sound_boton.pause(), 
            sound_batman.currentTime = 0, 
            sound_boton.currentTime = 0);
});
