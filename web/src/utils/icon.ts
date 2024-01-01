import {
  BsFileEarmarkWordFill,
  BsFileEarmarkExcelFill,
  BsFileEarmarkPptFill,
  BsFileEarmarkPdfFill,
  BsFileEarmarkPlayFill,
  BsFileEarmarkMusicFill,
  BsFileEarmarkFontFill,
  BsFileEarmarkImageFill,
  BsFileEarmarkMinusFill,
  BsApple,
  BsWindows,
  BsFileEarmarkZipFill,
  BsMarkdownFill,
} from "solid-icons/bs"
import { 
  SiAdobephotoshop, 
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobeindesign,
  SiTypescript,
  SiGnubash,
  SiJavascript,
  SiPhp
} from "solid-icons/si"
import {
  FaSolidDatabase,
  FaSolidBook,
  FaSolidCompactDisc,
  FaSolidLink,
} from "solid-icons/fa"
import { IoFolder } from "solid-icons/io"
import { ImAndroid } from "solid-icons/im"
import { Obj, ObjType } from "~/types"
import { ext } from "./path"
import {
  VscodeIconsFileTypeAi2,
  VscodeIconsFileTypePhotoshop2,
} from "~/components"
import { SiAsciinema } from "solid-icons/si"
import { FaBrandsGolang,FaBrandsJava,FaBrandsPython } from 'solid-icons/fa'
import { BiSolidFileJson,BiSolidFileCss,BiSolidFileHtml } from 'solid-icons/bi'

const iconMap = {
  "dmg,ipa,plist,tipa": BsApple,
  "exe,msi": BsWindows,
  "zip,gz,rar,7z,tar,jar,xz": BsFileEarmarkZipFill,
  apk: ImAndroid,
  "db,db-shm,db-wal,sql": FaSolidDatabase,
  md: BsMarkdownFill,
  epub: FaSolidBook,
  iso: FaSolidCompactDisc,
  m3u8: BsFileEarmarkPlayFill,
  "doc,docx": BsFileEarmarkWordFill,
  "xls,xlsx,csv": BsFileEarmarkExcelFill,
  "ppt,pptx": BsFileEarmarkPptFill,
  pdf: BsFileEarmarkPdfFill,
  // Adobe
  "psd,pdd": SiAdobephotoshop,
  prproj: SiAdobepremierepro,
  "ai,ait,eps,epsf,ps": SiAdobeillustrator,
  aep: SiAdobeaftereffects,
  sesx: SiAdobeaudition,
  indd: SiAdobeindesign,
  // code
  go: FaBrandsGolang,
  java: FaBrandsJava,
  pnp:SiPhp,
  "py,pyc,pyo,pyi,pyw,pyd,pyx": FaBrandsPython,
  "ts,tsx": SiTypescript, 
  "yaml,yml,toml": BsFiletypeYml,
  xml:BsFiletypeXml,
  sh: SiGnubash,
  json: BiSolidFileJson,
  "js,mjs,cjs": SiJavascript,
  css:BiSolidFileCss,
  html:BiSolidFileHtml,
}

export const getIconByTypeAndExt = (type: number, ext: string) => {
  if (type !== ObjType.FOLDER) {
    for (const [extensions, icon] of Object.entries(iconMap)) {
      if (extensions.split(",").includes(ext.toLowerCase())) {
        return icon
      }
    }
  }
  switch (type) {
    case ObjType.FOLDER:
      return IoFolder
    // case ObjType.OFFICE: {
    //   if (ext === "doc" || ext === "docx") {
    //     return BsFileEarmarkWordFill;
    //   }
    //   if (ext === "xls" || ext === "xlsx") {
    //     return BsFileEarmarkExcelFill;
    //   }
    //   if (ext === "ppt" || ext === "pptx") {
    //     return BsFileEarmarkPptFill;
    //   } else {
    //     return BsFileEarmarkPdfFill;
    //   }
    // }
    case ObjType.VIDEO:
      return BsFileEarmarkPlayFill
    case ObjType.AUDIO:
      return BsFileEarmarkMusicFill
    case ObjType.TEXT:
      return BsFileEarmarkFontFill
    case ObjType.IMAGE:
      return BsFileEarmarkImageFill
    default:
      return BsFileEarmarkMinusFill
  }
}

export const getIconByObj = (obj: Pick<Obj, "type" | "name">) => {
  return getIconByTypeAndExt(obj.type, ext(obj.name))
}
