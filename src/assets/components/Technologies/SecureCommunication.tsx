import React, { SVGProps } from 'react'

export default function SecureCommunication(props: SVGProps<SVGSVGElement>) {
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
        id="mask0_374_5576"
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
      <g mask="url(#mask0_374_5576)">
        <g filter="url(#filter0_bf_374_5576)">
          <path
            d="M739.496 310.555L429.557 489.357C402.605 504.881 359.184 504.881 332.233 489.357L22.4801 310.555C-4.47122 295.031 -4.47122 269.969 22.4801 254.445L332.42 75.6427C359.371 60.1191 402.793 60.1191 429.744 75.6427L739.683 254.445C766.448 269.969 766.448 295.031 739.496 310.555Z"
            fill="url(#paint0_linear_374_5576)"
          />
        </g>
        <g opacity="0.3" filter="url(#filter1_b_374_5576)">
          <path
            d="M686.23 340.555L376.29 519.357C349.339 534.881 305.917 534.881 278.966 519.357L-30.7865 340.555C-57.7378 325.031 -57.7378 299.969 -30.7865 284.445L279.153 105.643C306.104 90.1191 349.526 90.1191 376.477 105.643L686.417 284.445C713.181 299.969 713.181 325.031 686.23 340.555Z"
            fill="url(#paint1_linear_374_5576)"
          />
        </g>
        <rect x="143" y="15" width="343.937" height="491" fill="url(#pattern0_374_5576)" />
      </g>
      <defs>
        <filter
          id="filter0_bf_374_5576"
          x="-97.7334"
          y="-36"
          width="957.467"
          height="637"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.70276" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_374_5576" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_374_5576"
            result="shape"
          />
          <feGaussianBlur stdDeviation="50" result="effect2_foregroundBlur_374_5576" />
        </filter>
        <filter
          id="filter1_b_374_5576"
          x="-62.4055"
          y="82.5945"
          width="780.278"
          height="459.811"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.70276" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_374_5576" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_374_5576"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0_374_5576"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_374_5576"
            transform="matrix(0.000755509 0 0 0.000529221 -0.293139 -0.0419225)"
          />
        </pattern>
        <linearGradient
          id="paint0_linear_374_5576"
          x1="311"
          y1="64"
          x2="503.5"
          y2="410"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3EBFFC" stopOpacity="0" />
          <stop offset="1" stopColor="#3EBFFC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_374_5576"
          x1="257.733"
          y1="94"
          x2="328"
          y2="361"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3EBFFC" stopOpacity="0" />
          <stop offset="1" stopColor="#3EBFFC" />
        </linearGradient>
        <image
          id="image0_374_5576"
          width="2048"
          height="2048"
        />
      </defs>
    </svg>
  )
}