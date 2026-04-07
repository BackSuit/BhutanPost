/**
 * Inline SVG icon components — replaces react-icons and @chakra-ui/icons
 * to eliminate their massive barrel-import bundles (~650KB in dev, ~50KB+ in prod).
 *
 * Each icon renders a simple <svg> compatible with Chakra UI's <Icon as={...} />.
 */

// -- Heroicons Solid (viewBox 0 0 20 20, fill) --

export function HiX(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function HiMenu(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function HiSearch(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function HiChevronDown(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function HiChevronRight(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function HiDotsVertical(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  )
}

export function HiReply(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function HiPencil(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>
  )
}

// -- Heroicons Outline (viewBox 0 0 24 24, stroke) --

export function HiOutlineMail(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

export function HiOutlineUser(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  )
}

export function HiOutlineTrash(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  )
}

export function HiOutlineSwitchVertical(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
      />
    </svg>
  )
}

// -- Feather Icons (viewBox 0 0 24 24, stroke) --

export function FiUser(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export function FiLogOut(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}

export function FiSearch(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

export function FiLink(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  )
}

export function FiPlay(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

// -- Material Design Icons (viewBox 0 0 24 24, fill) --

export function MdCopyright(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  )
}

export function MdSubject(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" />
    </svg>
  )
}

// -- Ant Design Icons (viewBox 0 0 1024 1024, fill) --

export function AiFillCheckCircle(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
    </svg>
  )
}

export function AiOutlineInstagram(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C133.4 226.2 118.9 282.9 115.8 346.9c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.3 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
    </svg>
  )
}

// -- Remix Icons (viewBox 0 0 24 24, fill) --

export function RiFacebookBoxFill(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M15.402 21v-6.966h2.34l.35-2.718h-2.69V9.31c0-.786.218-1.322 1.346-1.322h1.438V5.55a19.25 19.25 0 00-2.096-.107c-2.074 0-3.494 1.266-3.494 3.59v2.003H10.26v2.718h2.336V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z" />
    </svg>
  )
}

// Small utility icons used across the app (triangles and minus)
export function TriangleUpIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M12 5l-9 12h18L12 5z" />
    </svg>
  )
}

export function TriangleDownIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M12 19l9-12H3l9 12z" />
    </svg>
  )
}

export function MinusIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M5 11h14v2H5z" />
    </svg>
  )
}
export function RiTelegramFill(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  )
}

export function RiTwitterFill(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" />
    </svg>
  )
}

export function RiWhatsappFill(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127c-.005-.002-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066 4.382 4.382 0 01-.299-.145 7.04 7.04 0 01-1.46-1.048 8.12 8.12 0 01-.437-.451c-.18-.2-.34-.418-.52-.642a.4.4 0 01-.064-.343c.046-.103.266-.339.39-.464l.09-.1c.091-.102.166-.207.222-.297a.554.554 0 00.071-.393c-.032-.137-.565-1.374-.643-1.57-.073-.183-.153-.2-.217-.21a4.413 4.413 0 00-.265-.008z" />
    </svg>
  )
}

export function RiLineFill(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M22 10.69c0-4.65-4.71-8.44-10.5-8.44S1 6.04 1 10.69c0 4.17 3.75 7.67 8.82 8.33.34.07.81.23.93.52.1.27.07.68.03.95 0 0-.12.74-.15.9-.05.27-.22 1.07.94.58 1.16-.48 6.27-3.69 8.56-6.32C21.82 13.73 22 12.29 22 10.69zm-14.28 2.2a.28.28 0 01-.28.28H5.28a.28.28 0 01-.28-.28v-4.5a.28.28 0 01.28-.28h.28a.28.28 0 01.28.28v3.94h1.6a.28.28 0 01.28.28v.28zm1.93 0a.28.28 0 01-.28.28h-.28a.28.28 0 01-.28-.28v-4.5a.28.28 0 01.28-.28h.28a.28.28 0 01.28.28v4.5zm4.64 0a.28.28 0 01-.28.28h-.28a.28.28 0 01-.23-.12l-2.1-2.84v2.68a.28.28 0 01-.28.28h-.28a.28.28 0 01-.28-.28v-4.5a.28.28 0 01.28-.28h.3a.28.28 0 01.22.12l2.1 2.83V8.39a.28.28 0 01.28-.28h.28a.28.28 0 01.28.28v4.5h-.01zm3.3-3.94a.28.28 0 01.28.28v.28a.28.28 0 01-.28.28H16a.28.28 0 00-.28.28v.8a.28.28 0 00.28.28h1.6a.28.28 0 01.28.28v.28a.28.28 0 01-.28.28H16a.28.28 0 00-.28.28v.8a.28.28 0 00.28.28h1.6a.28.28 0 01.28.28v.28a.28.28 0 01-.28.28h-2.16a.28.28 0 01-.28-.28v-4.5a.28.28 0 01.28-.28h2.16v-.04z" />
    </svg>
  )
}

export function RiFileCopy2Fill(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 013 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" />
    </svg>
  )
}

// -- Simple Icons (viewBox 0 0 24 24, fill) --

export function SiSpotify(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

export function SiApplepodcasts(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c4.988 0 7.399 3.376 7.399 5.852 0 2.476-1.199 3.536-2.613 3.536-1.178 0-2.005-.83-2.005-2.15 0-1.396 1.032-2.13 1.947-2.306-.324-.586-1.108-1.318-2.592-1.318-2.07 0-4.075 1.645-4.075 5.1 0 4.312 2.384 7.236 5.186 7.236 1.082 0 1.66-.242 2.428-.707.171-.104.332-.126.429-.035.137.13.186.378-.024.58-.618.594-2.09 1.575-3.995 1.575-3.756 0-6.672-3.272-6.672-8.268 0-5.34 3.434-9.095 7.587-9.095z" />
    </svg>
  )
}

export function SiGooglepodcasts(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M1.503 10.503h.99A1.503 1.503 0 014.003 12v.99a1.503 1.503 0 01-1.5 1.503h-1A1.503 1.503 0 010 12.99v-.99a1.503 1.503 0 011.503-1.497zm5.003-4.5h.99a1.5 1.5 0 011.5 1.5v9.99a1.5 1.5 0 01-1.5 1.5h-.99a1.5 1.5 0 01-1.5-1.5V7.503a1.5 1.5 0 011.5-1.5zm4.998-6h1.002a1.497 1.497 0 011.497 1.5v18.99a1.497 1.497 0 01-1.497 1.5h-1.002a1.497 1.497 0 01-1.497-1.5V1.503a1.497 1.497 0 011.497-1.5v-.003zm5.003 6h.99a1.5 1.5 0 011.5 1.5v9.99a1.5 1.5 0 01-1.5 1.5h-.99a1.5 1.5 0 01-1.5-1.5V7.503a1.5 1.5 0 011.5-1.5zm4.99 4.5a1.503 1.503 0 011.503 1.5v.99a1.503 1.503 0 01-1.503 1.5h-.99a1.503 1.503 0 01-1.503-1.5v-.99a1.503 1.503 0 011.503-1.5h.99z" />
    </svg>
  )
}

// -- Chakra UI Icons replacement --

export function ChevronRightIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export function ChevronLeftIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

export function ExternalLinkIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export function InfoIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  )
}

export function ArrowForwardIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
