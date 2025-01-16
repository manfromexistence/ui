const fs = require('node:fs');

function convertToCamelCase(inputString) {
  if (typeof inputString !== 'string') {
    return ""; // Or throw an error, depending on your needs
  }

  const trimmedString = inputString.trim();

  if (trimmedString === "") {
    return "";
  }

  const camelCaseString = trimmedString
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (match, chr) => {
      return chr ? chr.toUpperCase() : '';
    });

  return camelCaseString;
}

let iconList = [
  "academicons",
  "akar-icons",
  "ant-design",
  "arcticons",
  "basil",
  "bi",
  "bitcoin-icons",
  "bpmn",
  "brandico",
  "bubbles",
  "bx",
  "bxl",
  "bxs",
  "bytesize",
  "carbon",
  "catppuccin",
  "cbi",
  "charm",
  "cib",
  "cif",
  "ci",
  "cil",
  "circle-flags",
  "circum",
  "clarity",
  "codex",
  "codicon",
  "covid",
  "cryptocurrency-color",
  "cryptocurrency",
  "cuida",
  "dashicons",
  "devicon",
  "devicon-line",
  "devicon-original",
  "devicon-plain",
  "duo-icons",
  "ei",
  "el",
  "emblemicons",
  "emojione",
  "emojione-monotone",
  "emojione-v1",
  "entypo",
  "entypo-social",
  "eos-icons",
  "ep",
  "et",
  "eva",
  "f7",
  "fa6-brands",
  "fa6-regular",
  "fa6-solid",
  "fa-brands",
  "fad",
  "fa",
  "famicons",
  "fa-regular",
  "fa-solid",
  "feather",
  "fe",
  "file-icons",
  "flag",
  "flagpack",
  "flat-color-icons",
  "flat-ui",
  "flowbite",
  "fluent-color",
  "fluent-emoji-flat",
  "fluent-emoji-high-contrast",
  "fluent-emoji",
  "fluent",
  "fluent-mdl2",
  "fontelico",
  "fontisto",
  "formkit",
  "foundation",
  "fxemoji",
  "gala",
  "game-icons",
  "garden",
  "geo",
  "gg",
  "gis",
  "gravity-ui",
  "gridicons",
  "grommet-icons",
  "guidance",
  "healthicons",
  "heroicons",
  "heroicons-outline",
  "heroicons-solid",
  "hugeicons",
  "humbleicons",
  "ic",
  "icomoon-free",
  "iconamoon",
  "iconoir",
  "icon-park",
  "icon-park-outline",
  "icon-park-solid",
  "icon-park-twotone",
  "icons8",
  "il",
  "ion",
  "iwwa",
  "ix",
  "jam",
  "la",
  "lets-icons",
  "lineicons",
  "line-md",
  "logos",
  "lsicon",
  "ls",
  "lucide",
  "lucide-lab",
  "mage",
  "majesticons",
  "maki",
  "map",
  "marketeq",
  "material-symbols",
  "material-symbols-light",
  "mdi",
  "mdi-light",
  "medical-icon",
  "memory",
  "meteocons",
  "meteor-icons",
  "mi",
  "mingcute",
  "mono-icons",
  "mynaui",
  "nimbus",
  "nonicons",
  "noto",
  "noto-v1",
  "nrk",
  "octicon",
  "oi",
  "ooui",
  "openmoji",
  "oui",
  "pajamas",
  "pepicons",
  "pepicons-pencil",
  "pepicons-pop",
  "pepicons-print",
  "ph",
  "pixelarticons",
  "prime",
  "proicons",
  "ps",
  "qlementine-icons",
  "quill",
  "radix-icons",
  "raphael",
  "ri",
  "rivet-icons",
  "si-glyph",
  "si",
  "simple-icons",
  "simple-line-icons",
  "skill-icons",
  "solar",
  "stash",
  "streamline-emojis",
  "streamline",
  "subway",
  "svg-spinners",
  "system-uicons",
  "tabler",
  "tdesign",
  "teenyicons",
  "token-branded",
  "token",
  "topcoat",
  "twemoji",
  "typcn",
  "uil",
  "uim",
  "uis",
  "uit",
  "uiw",
  "unjs",
  "vaadin",
  "vscode-icons",
  "vs",
  "websymbol",
  "weui",
  "whh",
  "wi",
  "wpf",
  "zmdi",
  "zondicons",
]


function json(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    try {
      const jsonData = JSON.parse(data);

      // Check if the data is a valid object
      if (typeof jsonData !== 'object' || jsonData === null || Array.isArray(jsonData)) {
        console.error('The file does not contain a valid JSON object.');
        return;
      }

      const keys = Object.keys(jsonData);
      console.log(`The JSON object contains ${keys.length} properties.`);

      keys.forEach(key => {
        const item = jsonData[key];

        if (typeof item === 'object' && item !== null && item.hasOwnProperty('name')) {
          const linkHref = `/icons/${key}`; // Use the key as the link

          // console.log(`<Link href="${linkHref}" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
          //               <span class="font-mono text-sm">${item.name}</span>
          //               <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">${item.total}</span>
          //             </Link>`);
        } else {
          console.log(`- Property "${key}": Not a valid object or missing "name" property`);
        }
      });

    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  });
}

const filePath = 'data.json';
json(filePath);


console.log(iconList.length)