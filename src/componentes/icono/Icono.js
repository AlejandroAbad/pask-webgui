
const Icono = ({ icono, posicion, style, ...props }) => {
    if (!icono) return null;

    if (!posicion || !posicion[0]) posicion = [20, 0];
    if (!posicion[1]) posicion[1] = 0;

    if (!style) style = {}
    
    style.paddingBottom = posicion[1] + 'px'

    return new icono({
        size: posicion[0],
        style,
        ...props
    })

}

export default Icono