import React, { SVGProps } from 'react'

export default function StrongDigitalIdentity(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="630"
      height="370"
      viewBox="0 0 630 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path
        d="M0 18C0 8.05888 8.05888 0 18 0L612 0C621.941 0 630 8.05888 630 18V266.465C630 277.349 625.565 287.763 617.718 295.304L551.612 358.839C544.161 366 534.228 370 523.894 370H18C8.05889 370 0 361.941 0 352L0 18Z"
        fill="#2962F6"
      />
      <mask
        id="mask0_374_5523"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="630"
        height="370"
      >
        <path
          d="M0 18C0 8.05888 8.05888 0 18 0L612 0C621.941 0 630 8.05888 630 18V266.465C630 277.349 625.565 287.763 617.718 295.304L551.612 358.839C544.161 366 534.228 370 523.894 370H18C8.05889 370 0 361.941 0 352L0 18Z"
          fill="#2962F6"
        />
      </mask>
      <g mask="url(#mask0_374_5523)">
        <g filter="url(#filter0_bf_374_5523)">
          <path
            d="M986.142 503.378L477.805 796.635C433.602 822.096 362.386 822.096 318.182 796.635L-189.848 503.378C-234.051 477.918 -234.051 436.813 -189.848 411.352L318.489 118.095C362.693 92.6349 433.909 92.6349 478.112 118.095L986.449 411.352C1030.35 436.813 1030.35 477.918 986.142 503.378Z"
            fill="url(#paint0_linear_374_5523)"
          />
        </g>
        <g opacity="0.3" filter="url(#filter1_b_374_5523)">
          <path
            d="M-213.142 503.378L295.195 796.635C339.398 822.096 410.614 822.096 454.818 796.635L962.848 503.378C1007.05 477.918 1007.05 436.813 962.848 411.352L454.511 118.095C410.307 92.6349 339.091 92.6349 294.888 118.095L-213.449 411.352C-257.345 436.813 -257.345 477.918 -213.142 503.378Z"
            fill="url(#paint1_linear_374_5523)"
          />
        </g>
        <rect x="69" y="18.6433" width="501" height="501" fill="url(#pattern0_374_5523)" />
      </g>
      <defs>
        <filter
          id="filter0_bf_374_5523"
          x="-323"
          y="-1"
          width="1442.33"
          height="916.731"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.70276" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_374_5523" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_374_5523"
            result="shape"
          />
          <feGaussianBlur stdDeviation="50" result="effect2_foregroundBlur_374_5523" />
        </filter>
        <filter
          id="filter1_b_374_5523"
          x="-257.739"
          y="87.5945"
          width="1265.14"
          height="739.542"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.70276" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_374_5523" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_374_5523"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0_374_5523"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_374_5523" transform="scale(0.000488281)" />
        </pattern>
        <linearGradient
          id="paint0_linear_374_5523"
          x1="283.359"
          y1="99"
          x2="413"
          y2="413.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3EBFFC" stopOpacity="0" />
          <stop offset="0.465" stopColor="#3EBFFC" stopOpacity="0.184314" />
          <stop offset="1" stopColor="#3EBFFC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_374_5523"
          x1="489.641"
          y1="99"
          x2="340.667"
          y2="457"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3EBFFC" stopOpacity="0" />
          <stop offset="1" stopColor="#3EBFFC" />
        </linearGradient>
        <image
          id="image0_374_5523"
          width="2048"
          height="2048"
        />
      </defs>
    </svg>
  )
}