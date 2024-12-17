import cmyk2rgb from "./cmyk2rgb.js";
import hsl2hsv from "./hsl2hsv.js";
import hsl2rgb from "./hsl2rgb.js";
import hsl2string from "./hsl2string.js";
import hsv2hsl from "./hsv2hsl.js";
import hsv2rgb from "./hsv2rgb.js";
import hwb2rgb from "./hwb2rgb.js";
import lab2lch from "./lab2lch.js";
import lab2xyz from "./lab2xyz.js";
import lch2lab from "./lch2lab.js";
import rgb2cmyk from "./rgb2cmyk.js";
import rgb2hex from "./rgb2hex.js";
import rgb2hsl from "./rgb2hsl.js";
import rgb2hsv from "./rgb2hsv.js";
import rgb2hwb from "./rgb2hwb.js";
import rgb2lab from "./rgb2lab.js";
import rgb2xyz from "./rgb2xyz.js";
import rgb2grayscale from "./rgb2grayscale.js";
import rgb2string from "./rgb2string.js";
import xyz2lab from "./xyz2lab.js";
import xyz2rgb from "./xyz2rgb.js";

export default {
  cmyk: {
    rgb: cmyk2rgb
  },
  hsl: {
    hsv: hsl2hsv,
    rgb: hsl2rgb,
    string: hsl2string
  },
  hsv: {
    hsl: hsv2hsl,
    rgb: hsv2rgb
  },
  hwb: {
    rgb: hwb2rgb
  },
  lab: {
    lch: lab2lch,
    xyz: lab2xyz
  },
  lch: {
    lab: lch2lab
  },
  rgb: {
    cmyk: rgb2cmyk,
    hex: rgb2hex,
    hsl: rgb2hsl,
    hsv: rgb2hsv,
    hwb: rgb2hwb,
    lab: rgb2lab,
    xyz: rgb2xyz,
    grayscale: rgb2grayscale,
    string: rgb2string
  },
  xyz: {
    lab: xyz2lab,
    rgb: xyz2rgb
  }
};
