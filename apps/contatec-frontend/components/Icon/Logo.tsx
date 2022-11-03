import * as React from "react"

function Logo(props) {
  return (
    <svg
      width="7em"
      height="3em"
      viewBox="0 0 166 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.63 26.7c0-1.236.276-2.34.828-3.312a5.976 5.976 0 012.286-2.286c.972-.552 2.058-.828 3.258-.828 1.404 0 2.634.36 3.69 1.08 1.056.72 1.794 1.716 2.214 2.988h-2.898c-.288-.6-.696-1.05-1.224-1.35-.516-.3-1.116-.45-1.8-.45-.732 0-1.386.174-1.962.522a3.519 3.519 0 00-1.332 1.44c-.312.624-.468 1.356-.468 2.196 0 .828.156 1.56.468 2.196.324.624.768 1.11 1.332 1.458.576.336 1.23.504 1.962.504.684 0 1.284-.15 1.8-.45.528-.312.936-.768 1.224-1.368h2.898c-.42 1.284-1.158 2.286-2.214 3.006-1.044.708-2.274 1.062-3.69 1.062-1.2 0-2.286-.27-3.258-.81a6.146 6.146 0 01-2.286-2.286c-.552-.972-.828-2.076-.828-3.312zm36.013 6.462c-.96 0-1.824-.21-2.592-.63a4.726 4.726 0 01-1.818-1.818c-.432-.78-.648-1.68-.648-2.7 0-1.02.222-1.92.666-2.7a4.69 4.69 0 011.854-1.8c.78-.432 1.65-.648 2.61-.648s1.83.216 2.61.648c.78.42 1.392 1.02 1.836 1.8.456.78.684 1.68.684 2.7 0 1.02-.234 1.92-.702 2.7a4.783 4.783 0 01-1.872 1.818c-.78.42-1.656.63-2.628.63zm0-2.196c.456 0 .882-.108 1.278-.324.408-.228.732-.564.972-1.008.24-.444.36-.984.36-1.62 0-.948-.252-1.674-.756-2.178a2.413 2.413 0 00-1.818-.774c-.72 0-1.326.258-1.818.774-.48.504-.72 1.23-.72 2.178s.234 1.68.702 2.196c.48.504 1.08.756 1.8.756zm12.576-8.082c1.188 0 2.148.378 2.88 1.134.732.744 1.098 1.788 1.098 3.132V33h-2.52v-5.508c0-.792-.198-1.398-.594-1.818-.396-.432-.936-.648-1.62-.648-.696 0-1.248.216-1.656.648-.396.42-.594 1.026-.594 1.818V33h-2.52v-9.972h2.52v1.242a3.417 3.417 0 011.278-1.008 3.96 3.96 0 011.728-.378zm9.309 2.214v4.824c0 .336.078.582.234.738.168.144.444.216.828.216h1.17V33h-1.584c-2.124 0-3.186-1.032-3.186-3.096v-4.806h-1.188v-2.07h1.188v-2.466h2.538v2.466h2.232v2.07h-2.232zm3.396 2.88c0-1.008.198-1.902.594-2.682.408-.78.954-1.38 1.638-1.8.696-.42 1.47-.63 2.322-.63.744 0 1.392.15 1.944.45.564.3 1.014.678 1.35 1.134v-1.422h2.538V33h-2.538v-1.458c-.324.468-.774.858-1.35 1.17-.564.3-1.218.45-1.962.45-.84 0-1.608-.216-2.304-.648-.684-.432-1.23-1.038-1.638-1.818-.396-.792-.594-1.698-.594-2.718zm7.848.036c0-.612-.12-1.134-.36-1.566a2.463 2.463 0 00-.972-1.008 2.548 2.548 0 00-1.314-.36c-.468 0-.9.114-1.296.342-.396.228-.72.564-.972 1.008-.24.432-.36.948-.36 1.548 0 .6.12 1.128.36 1.584.252.444.576.786.972 1.026.408.24.84.36 1.296.36a2.65 2.65 0 001.314-.342c.408-.24.732-.576.972-1.008.24-.444.36-.972.36-1.584zm7.933-2.916v4.824c0 .336.078.582.234.738.168.144.444.216.828.216h1.17V33h-1.584c-2.124 0-3.186-1.032-3.186-3.096v-4.806h-1.188v-2.07h1.188v-2.466h2.538v2.466h2.232v2.07h-2.232zm13.315 2.7c0 .36-.024.684-.072.972h-7.29c.06.72.312 1.284.756 1.692.444.408.99.612 1.638.612.936 0 1.602-.402 1.998-1.206h2.718a4.588 4.588 0 01-1.656 2.376c-.816.612-1.818.918-3.006.918-.96 0-1.824-.21-2.592-.63a4.637 4.637 0 01-1.782-1.818c-.42-.78-.63-1.68-.63-2.7 0-1.032.21-1.938.63-2.718a4.396 4.396 0 011.764-1.8c.756-.42 1.626-.63 2.61-.63.948 0 1.794.204 2.538.612.756.408 1.338.99 1.746 1.746.42.744.63 1.602.63 2.574zm-2.61-.72c-.012-.648-.246-1.164-.702-1.548-.456-.396-1.014-.594-1.674-.594-.624 0-1.152.192-1.584.576-.42.372-.678.894-.774 1.566h4.734zm3.801.936c0-1.032.21-1.932.63-2.7a4.428 4.428 0 011.746-1.8c.744-.432 1.596-.648 2.556-.648 1.236 0 2.256.312 3.06.936.816.612 1.362 1.476 1.638 2.592h-2.718a1.923 1.923 0 00-.738-1.008c-.336-.252-.756-.378-1.26-.378-.72 0-1.29.264-1.71.792-.42.516-.63 1.254-.63 2.214 0 .948.21 1.686.63 2.214.42.516.99.774 1.71.774 1.02 0 1.686-.456 1.998-1.368h2.718c-.276 1.08-.822 1.938-1.638 2.574-.816.636-1.836.954-3.06.954-.96 0-1.812-.21-2.556-.63a4.58 4.58 0 01-1.746-1.8c-.42-.78-.63-1.686-.63-2.718z"
        fill="#482F51"
      />
      <path
        d="M65.833 40.333h-3.5V14.667A4.671 4.671 0 0057.667 10H20.333a4.671 4.671 0 00-4.666 4.667v25.666h-3.5c-.645 0-1.167.522-1.167 1.167v1.167a4.671 4.671 0 004.667 4.666h46.666A4.671 4.671 0 0067 42.667V41.5c0-.645-.522-1.167-1.167-1.167zM18 14.667a2.336 2.336 0 012.333-2.334h37.334A2.336 2.336 0 0160 14.667v25.666H18V14.667zM62.333 45H15.667a2.336 2.336 0 01-2.334-2.333h19.35l.825.825c.22.218.515.341.825.341h9.334c.31 0 .606-.123.825-.341l.824-.825h19.35A2.336 2.336 0 0162.334 45z"
        fill="#482F51"
      />
    </svg>
  )
}

export default Logo
