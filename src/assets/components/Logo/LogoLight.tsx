import React, { SVGProps } from 'react'

export default function LogoLight({
  colors = { text: 'white', logo: 'white' },
  ...props
}: {
  colors?: { text: string; logo: string }
} & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="106"
      height="34"
      viewBox="0 0 106 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <mask
        id="mask0_327_4943"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="89"
        height="34"
      >
        <rect width="88.0897" height="33.6276" fill="url(#pattern0_327_4943)" />
      </mask>
      <g mask="url(#mask0_327_4943)">
        <rect width="88.0897" height="33.6276" fill={colors.text} />
      </g>
      <mask
        id="mask1_327_4943"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="88"
        y="0"
        width="18"
        height="34"
      >
        <rect x="88.0898" width="17.9103" height="33.6276" fill="url(#pattern1_327_4943)" />
      </mask>
      <g mask="url(#mask1_327_4943)">
        <rect x="88.0898" width="17.9103" height="33.6276" fill={colors.logo} />
      </g>
      <defs>
        <pattern
          id="pattern0_327_4943"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_327_4943" transform="scale(0.00414938 0.0108696)" />
        </pattern>
        <pattern
          id="pattern1_327_4943"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_327_4943"
            transform="matrix(0.0204082 0 0 0.0108696 -4.91837 0)"
          />
        </pattern>
        <image
          id="image0_327_4943"
          width="290"
          height="92"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAABcCAYAAADK4bizAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABIqADAAQAAAABAAAAXAAAAACrykkbAAAT0klEQVR4Ae1dC4wV1RleLDVKDRrSEHzhllJikRa1tCVolVJa5OEbi6jFV1sFpD6obVFrIz7QElCK+EKtUYyCiI8YtIYqsUgUiW0FkRqk22WrligxhFqK291+3/Ve3OXenfnOzJy5M/f+f/Izd2f+8z++Oee7Z87MXLo1mBgChoAh4AGBTX9t771kUdt5iuvuipHZGAKGgCHgisA//t7Q/57ZbbeEtWtvaPhgrzAjO24IGAKGgG8EjIh8I2z+DQFDIBQBI6JQiMzAEDAEfCNgROQbYfNvCBgCoQgYEYVCZAaGgCHgGwEjIt8Im39DwBAIRcCIKBQiMzAEDAHfCBgR+UbY/BsChkAoAvZAYyhEZmAI1BcCW7a099q6paFXWNW992/YdugR3baF2SnHjYgUlMzGEKgjBBbM/N/1jy5snxJW8pjx3e6CzeQwO+W4XZopKJmNIVBHCLS2NrSlXa4RUdqIWzxDIOMItLU24PWvdMWIKF28LZohkHkE2tvajYgyf5YsQUOgxhFI/boMeNqMqMY7lZVnCOQBASOiPJwly9EQqHEEjIhq/ARbeYZAHhAwIsrDWbIcDYEaR8AeaBRPcHt7e0+Y9oH2Lm73xnZrUd/v1q0bP5sYAoZABAS6Y4D9Hu2OFNrOw2B7QLBLxAR5XQFHP3Jw9gTym+lgH2iK+MNhMBrKbT8o5Yufbsr+/QD23Lkdugr6R+gy5LMDW6+CuH/2GuAz5634+AGUj/Rz+yF0M3Qt6tyIrRdBfS/DcQ/B+TTkQexDBT7VPj8fPu8PdZgRg+/0++RVPIzIL8hAuWFB94u+d2K3NYFGKR/kjIjf8goRHZBWbugowxFrBrSrgb9nKqvRYWKTEOLy/ZqLoedDWa8av2THLUlrEnQ2/K3AdgFyW42tLzkEjkvxfcUI8ksSJkmthC5GrU8GGUc4xvr6Cu0Usiq54axW6fOcBedG3mtp6Nu6qzCeA3PetVMi9kAfSR/cK2mHcf0VyeA++FEHVxNsT40TFzH3gc6Bj7egN0L7Q9X4MK0o7OxnQZ+C7z9Bh1W0yv9O4sQvszOhC1HnW9Af578sqyBNBDJHRCj+cShnFYrwEuFCfAtHXp/BoBkBH29CeSlI8khaOFCPhZKQ5iftPGP+WOvh0FmodV0R24ylaOlkEYFMERE67jyANEgEiiQ0ByT0gmhfZoZ412DnYqhKfGU+HHZwkJ6JmJwd8RKwloW18jwuRq3X1XKhVlsyCGSGiNBhObXnpQw7sSIvgIRuVgwr2SAeCehSqBqvkhvXfYzF2dGriK8SrmuMLNmz3ilGRlk6JdnMJRNEhI7KNRmu0aik8BfYTowCKWLxTiHvao1wiBclVFAb1vss8hgaZFQjx0pkNK5G6rEyPCBQdSLCYGQOj0EPEut7F3anYzbUJtrvaVZtEirlw7tBj6P+o0s7anhLMpqPWnkn0sQQKEOg6kSEjB6GKrdSmTzXhfi8yGb+4SoYCE+hzUDXdh7tSb4kI951qnVpRIELa71Iqy8aAt2jNUumFQbgZfA0UvRGEroXJLRMtO9khljXYwdvoauXf53ae/yjEb55p/AYjzHomjEiETja7Qs9DNpY3EZ9vmY4zsMInMPINxgQ36QGEagaEaFDcn3E5aFFPsFLe2dBrCFoxAcVo5AQCfB96AboRui64uePseWtas6wvlrc9sM2yuxmAHK8CvXdhPa+5Fb451PKsQW5kpimQ6+EupAS8ecXghERQDD5DIGqEBE6MjvvQ1D1uR0SwOmfpe386Va0cCUhEhDJ51IMYC6OV5Im7HyudAB1Ec9Z0POgLvFoOw3tb0es7ficaUGO/0GCN1CRM5+NusQhYZLuMPjw+bS5QzpmmgUEqrVGxMXp/iIAfFhxIjouZyDOgk4/Do04c3ERzoBmIebx0K5IqMwfbFuhnCWMgq4vMwjewZlU7p65Qb3TkPfU4NI6HSXpXthpj/1R9wikTkQghluAunqniLOSGS5kUOGMulz+sTnXUcYi5twKvqRdaPs6DL8BXQFlDaqcBXzUu4eqT+92qPcOBOGNAFV+oBqaXX0gkCoRYZCdBFgvgCqXLRzAS9HJ7496KhBvCNoOcGjfDNtRRSJxaFZuCh+7oN/HkU3lR7vcw0tVzqjyKHyuq01MnO/2DRJtzawOEEiNiNDx+gLPBVCFhAj9RgzkyfwQQ85FWzUeiY+PBrgQh5LaGTBqUQyLNuMdbDNjCty4bsRXdBThOfm6Ymg29YFAakQEOLkuxIf4FOHl0amKYYjNmJDjHQ8/icH0dMcdSXyGT5LQr6HqJRpnCyOTiF0FH7c7xFT7goNLM80rAqkQEQYWf4iqnwgSB+z5GMDqwK3oFjEZr2fFg+U738Wuy8t3J7MHtTwAT7zzpwhnC8crhlmzQZ38AuHMSJEvKEZmUx8IeCciEMLFgHIclAMsTEg+vFv1UpihcJwL4kpMulqEmDsEn3FM+DtHKrnm+bLlbRGkT0Q7M6sDBLwSEUiIr27wlrRCCBykK0AIcxPCvVH0w7h8zcSroC4+b6SSXZ4vW9QZ0U6vgJvzXCHgjYhAQj2AxCNQ3glSpBmDlXdekpIDRUd89ucN0TaumTrTUzGLm4+P9mqfMiLygX5OfaqdJkp5i9FIfZCQC7pxnpyulJ86mLmukZa8KQbaR7TLotmhYlJclzMxBAoIeCEizIZ4OTZUxJiXRlMxK2kS7VUzlYiSjhuUX3PQwY7HijPKjrsy/xk58x00ZSbKc74h8wVZgqkhkDgRoTP+ANlPgarrQneBhBK/bY74vUQUORtLS9RZALE7IK2kEozDGxOK7MQ536gYmk19IJAoEYGE+gA2/uaMQkJE+BV0SD5j40NUInrPR/AufL7fxf5Ku9VHDyq1rda+a8XAz4t2ZlYnCCRKRMCMv3nTV8SOU3M+dexL9hMd86XatISXJFRFckVE+BK6DUUpszjWz19eMDEEdiOQGBGhI94JrwN2ew7+wJnBBMyGfN45UWtTiSG4IuEo6t0mmJVMeNcxF1K8HOd/RKBIE3BYqRiaTf0goA7WQETQESfBYDxUvSS7Gp1xfaDTGAeRT3eH5h852KZpmgsiAtZ8FecPIjAk/dz91IlYm5nFQCA2EaEjDkR8/rSHSkJMl2tJPoWDWM1nu89EKvj+uMK+SrsyfQsf570/9FkkvqxS8hX2kYSW4QvomQrHbFedI+AycyiDCh2R7fm8kCuxTEXbO9Apfc1G9i5LtusdO7o+5OWISkQuNSiJDgbmUUmX61Vfgx5R3PKzejMApoV1Md6YuIh/mNQHAvv3btg25BjtjngsIgKcJKFBEWDlj3/Nhv4kQlulicsg9rlOVSlXNV7cc7NnbP4ESzWEM6GVICGfNyaqUZfFDEFgyLDCIxonh5gVDke+NMO366/g4TglSBc2p8BHFBLrwl2n3S517erU0v8farykich/ZeURSEJ8TsxIqBwb29MBAZcBu7sZCIQENB2qrsPsbtvhA9vyR+19iEtdbT4SCPCZdryAVLwdIgG9AT0VJOTrOTFvyZvj9BFwGbCF7EBCXBvg7wvFIaFSpUfC30mlPxLc1sNgTxCuxF3dCAIaDF2VuGdzWJMIOBMRUOBDi/0SQoNkxt/pSVpciCgKBnHyVeO51BAnHx9tm304NZ+1i4A6KAoIYPbCS6mk13X6wO9lCUPsMoidMEggTzWeSw0JpJWoi7txTrdAr4Pm4nmoRKs3Z84IqIOCjklCJAzlkoyvb0yAcq0gTOhvesId1mWhtzUswYSPq/Fczk3CKcZ2x3PKH3e7Fvo3nNvxsT2ag5pGwEdn3wzE+F/yLMF2hYgeO+0s0TZps6zOPHycm6SxU/zx3N4JMrpGMTab+kQg6c7eAhhPBAlxS/kldGvhU/g//M8F+4ebJW6RNAaJJ1gDDjlDuhTn117vqIGT6aMEl0uYsPilF1l5WVYQEFIzOh9nRpcUdwVt2Fl5+XdikJF4zGWWkyQGSnpqPJcalLh8ePQlxbALm/2xn09Uc41wIHQw1OWJep7fKegP69AvluKziSGwGwF1UOxu0MUHrgVdiA62usLxq7HvNCifpg6ToeioI+FHvaTryl9rVwcq7E/7nS41nksNFcoq27UBuL5dttdtx2sdzXGuBuDvudCxHfcHfCYZzUY7/h9ySdcXENYOZR2BJC5LSEKXo2Mtr1Qs9m/H/rsrHauwjx2VL9DGFfXpZcbpETeYY/tqEZFjmuHmJDboOFieDP1veIuCRSP+/bloa2Z1gkBcIiIJ8eG1RSF43YDjXMRWpC++MX+qGAbY8H0u5qbIfopRgjZqPPWdtARTi+YK5/9ptBzp0NrXO4YOKZhplhCIQ0Qc6HyP6LawgmDD9Y45UIUcOCuaATKKfNmIeC6D+ICw/BM+rtblUkPCKbq7A+ar0IprfIr0xPk9RTE0m/pAICoRkVCWoPPJ7xHB9g604YK2Io0w8vHEdaXYfGUlFcHgUy/LmM+OVJJKMAjO8RVw95Hgkl82fM7MxBAoIBCFiEhCz6PTTY2A4fVoo8yK6Po8DNxDIsQoNVFnFL1LDVLYcgBSFckdERWL4s+7KHKcYmQ29YGAKxGRRPgDV2dHgQfteCtfvXNDguDlXFRRvpnpu0/UABHaucTiIn8e5S4x6b3xRcPHAEwMgQZXIuIt4LjP+fB2vjorGoHOemzE87RNbHewaJeEmUpExEcl0iTySswH+gdx/6fgkDNDIyIBqHowcSGitQBkVFxQ0FFXwsca0Q87a9Tb+VvFGH1FuyTM5EtN4JRLIiqCtFEEK03sxZTMrBoIqHdwmNvDGBw7E0qSr358C6qslwzArOgcxF7kGFslon6OfuOYf1lszLuMeZZ/i8nzaW2TBBFo1682Eowa35ULEcWPVvQAUlkPclmOPycJTklWv4G6EtG/BN806YVc9kNOO0T7OGZDxcbqZaXoLnWzz4kRXX5bXHRZv2abdn3+QKX60Rn84V6XSzOlRhebGTBWZy0HgCyudXEO2xbRnkQ3TrSNbIb8ufh+uOhAfcxBdJe6GWtVpIdiZDa1j0DViAgzkHcBrzrLIVlMxmDmVpX1MFQXxSerTmPYTUNbNf9NMeJkoelRYhKtop2Z1TgCVSOiIq685CIhKcI7TvLtfBDdGtiray0DQXJjlCSi2BQJ9AKHtp1eLnVoV3VT1DocSaiX/B9WPWFLIBMIVJWIiusyC4CEOnMZg45+tANyvNOnCGcqc+BbHUCKz4429+EP5dcH2IZYPMcPOZVfOOStPlPm4NJM84hAVYmIgIGMbsJGvVVdIAwHoBfDViU5rt885OBbMgW5/QyGwyTjT402ApNmB/vMmKLWbyKZ0WJCPC/qF4Xo0szyikDViagIHF8LUAljEDr8eAVwDOgHYefyhPJI+JYv/8JygK+TYMMHONW1IWIwP8xvho+T+FXZivPTpBqbXW0jkAkiQoe8BzCra0Uc1C4/OcrLIlXoexII5DGoywuqZf7Rni+ALoSqd5DoowVYLOGHvAnqfQI5f8kh76UOtmZa4whkgoiKGHPhWp0V9UbHV9cifge/LrfDSUbjoesQ4yxsnQRt+HtKz6IRH09wISHWTgxyJaj1YOgrSPoUh8RZ690O9mZa4whkhogwE3gSWG8U8SZZ8MfYe4bZw+8O2NwJVUmu5LI/PsxDjNeg/K3lwGdecPwE6CNowzteJ0CZo4twbehplwbVtEWtR0E542uBftsxl+WoVZ0BO7o28zwi4OsuUVQsOIvgFF8ZxAfB7hboZGigoNPPxKA5GUaK346+aE8dAuV/FrgV22YoB99OKN8d6wtlLsTS1T+aFIQkObX42dfmKuS/JYbzfdH2sKIeim3UvkMMuW6WBxkLzA6scqL8zwYWVTkH7+GjdiYviQHwVTjxq+Gci7yKjIf9PLRTZlIT4fBFKEkjipRIaWCUxgFtSEKzUMMbATZJHBqbhJOYPljrAtTaEtNPWs1HIhC1mvIggi+qZgJpxM7MpVmHYvlCrHoZRXK4tUPbLj+i87+Ng+dD+Y2cFWGd/B8t5mYlIc95bEKtMz3HMPc5RCBzRISOytmNy1rJEMyKxijYw/fzsLsImgUyIgnxly7r5YfkuSbEWamJIVCGQOaIqJgh1xBUsuCsSP59awx8LopzQFRzsZQktAy5nI1tPQjrnYx6m+qhWKvRHYFMEhE6LG+3P+BQziGYFV2i2sP/C7D9LnS92iZBOw7K2ciBM7N6ENY7A/W6zHLrARersQMCmSSiYn58pkZd1OSs6EqQ0T4dagv8iIHBNSO+Jb4EysGShmxGkAmI/ds0gmUgRhNyOBv13puBXCyFDCOQWSJC5+Xtcb7uoJIEb6PLl2g8J4jRCp2Aj9OhzdznSVjDo9DBiMfZWK0L630Qynq5LmdiCAQikFkiYtboxJw5bAusoPPBczArauy8K/wvxOGg+Qp0BrQJqpIfTAOFfpZCRyPGROiOQOv8H2S9y6GjUOu50O35L8kqSAOBTBNREYBZ2KrEwFcqpNv5e4KLQbMLejOU70tx/eYZKOOqsWFaENpvgJLUOCM4A7q2cKT2/inh8xxK4wOZR6HWsdDXa69Uq8gnAt0wgxiOAMo7UWvRwbjGkbogxx+6BEWeXPdJRBC7Pxz1g3LLH78vfe6Bz8SD+g6Uv6pY+BvxU5sJuGKDHONKGxxwlsobCnyD3pWoneKjvtPQoLvQaAVykWbP8Dkc/pQ+L4T1btKEutZ4j9IhwMsvtg9qeafQ3zvsLf94WGPD5qEjk3kQ9/9msXscLGvVCAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  )
}
