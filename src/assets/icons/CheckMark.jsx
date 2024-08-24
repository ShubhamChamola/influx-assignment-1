export default function CheckMark({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_85_33)">
        <mask
          id="mask0_85_33"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <path
            d="M15.0003 28.3346C16.7516 28.3369 18.4861 27.9931 20.1041 27.3229C21.722 26.6526 23.1916 25.6693 24.4283 24.4293C25.6683 23.1926 26.6517 21.723 27.3219 20.105C27.9921 18.4871 28.3359 16.7526 28.3337 15.0013C28.3359 13.25 27.992 11.5156 27.3218 9.8976C26.6516 8.27963 25.6683 6.81005 24.4283 5.57331C23.1916 4.33333 21.722 3.34998 20.1041 2.67977C18.4861 2.00956 16.7516 1.66571 15.0003 1.66798C13.2491 1.66575 11.5146 2.00961 9.89662 2.67982C8.27865 3.35003 6.80907 4.33336 5.57234 5.57331C4.33238 6.81005 3.34905 8.27963 2.67884 9.8976C2.00864 11.5156 1.66477 13.25 1.667 15.0013C1.66473 16.7526 2.00858 18.4871 2.67879 20.105C3.349 21.723 4.33235 23.1926 5.57234 24.4293C6.80907 25.6693 8.27865 26.6526 9.89662 27.3228C11.5146 27.993 13.2491 28.3369 15.0003 28.3346Z"
            fill="white"
            stroke="white"
            stroke-width="2.66667"
            stroke-linejoin="round"
          />
          <path
            d="M9.66699 15L13.667 19L21.667 11"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </mask>
        <g mask="url(#mask0_85_33)">
          <path d="M-1.00098 -1H30.999V31H-1.00098V-1Z" fill="white" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_85_33">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
