import layout_perumahan from "./images/Area Perumahan Mulyorejo.jpg";
import foto from "./images/foto.png"
import logo_asia from "./images/institut_asia.png"
import logo_ti from "./images/logo-prodi-ti.png"
import logo_web from "./images/logo_web.jpg"

type imageType = {
    layout_perumahan: string;
    foto: string;
    logo_asia: string;
    logo_ti: string;
    logo_web: string;
};

const Assets: imageType = {
    layout_perumahan,
    foto,
    logo_asia,
    logo_ti,
    logo_web
};

export default Assets;
