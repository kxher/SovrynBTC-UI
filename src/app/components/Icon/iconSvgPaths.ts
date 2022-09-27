import { IconName } from './types';

export const IconSvgPaths: Record<IconName, string[]> = {
  wallet: [
    'M 28 24 L 28 25.335938 C 27.996094 26.804688 26.804688 27.996094 25.335938 28 L 6.664062 28 C 5.195312 28 4 26.804688 4 25.335938 L 4 6.664062 C 4 5.195312 5.195312 4 6.664062 4 L 25.332031 4 C 26.804688 4.003906 27.996094 5.195312 28 6.664062 L 28 8 L 16 8 C 14.527344 8 13.335938 9.195312 13.335938 10.664062 L 13.335938 21.332031 C 13.332031 22.804688 14.527344 24 16 24 Z M 16 21.335938 L 29.335938 21.335938 L 29.335938 10.664062 L 16 10.664062 Z M 21.335938 18 C 20.230469 18 19.335938 17.105469 19.335938 16 C 19.335938 14.894531 20.230469 14 21.335938 14 C 22.4375 14 23.335938 14.894531 23.335938 16 C 23.335938 17.105469 22.4375 18 21.335938 18 Z M 21.335938 18',
  ],
  edit: [
    'M 4.800781 22.53125 L 4.800781 27.199219 L 9.46875 27.199219 L 23.226562 13.441406 L 18.558594 8.769531 Z M 26.839844 9.828125 C 27.074219 9.59375 27.207031 9.277344 27.207031 8.945312 C 27.207031 8.617188 27.074219 8.300781 26.839844 8.066406 L 23.929688 5.15625 C 23.695312 4.921875 23.378906 4.789062 23.046875 4.789062 C 22.71875 4.789062 22.402344 4.921875 22.167969 5.15625 L 19.894531 7.4375 L 24.5625 12.105469 Z M 26.839844 9.828125',
  ],
  'ellipsis-h': [
    'M 6 16 C 6 17.101562 6.898438 18 8 18 C 9.101562 18 10 17.101562 10 16 C 10 14.898438 9.101562 14 8 14 C 6.898438 14 6 14.898438 6 16 Z M 14 16 C 14 17.101562 14.898438 18 16 18 C 17.101562 18 18 17.101562 18 16 C 18 14.898438 17.101562 14 16 14 C 14.898438 14 14 14.898438 14 16 Z M 22 16 C 22 17.101562 22.898438 18 24 18 C 25.101562 18 26 17.101562 26 16 C 26 14.898438 25.101562 14 24 14 C 22.898438 14 22 14.898438 22 16 Z M 22 16',
  ],
  'address-icon': [
    'M32 16C32 7.16406 24.8359 0 16 0C7.16406 0 0 7.16406 0 16C0 24.8359 7.16406 32 16 32C24.8359 32 32 24.8359 32 16ZM25.3945 16L7.40234 23.8164L7.39453 17.7383L20.25 16L7.39453 14.2617L7.40234 8.18359L25.3945 16Z',
  ],
  'failed-tx': [
    'M 14.667969 20 L 17.332031 20 L 17.332031 22.667969 L 14.667969 22.667969 Z M 14.667969 9.332031 L 17.332031 9.332031 L 17.332031 17.332031 L 14.667969 17.332031 Z M 15.984375 2.667969 C 8.625 2.671875 2.660156 8.644531 2.664062 16.007812 C 2.667969 23.371094 8.640625 29.335938 16.003906 29.332031 C 23.367188 29.332031 29.332031 23.363281 29.332031 16 C 29.335938 12.460938 27.929688 9.066406 25.425781 6.566406 C 22.921875 4.0625 19.523438 2.660156 15.984375 2.667969 Z M 16 26.667969 C 10.109375 26.667969 5.332031 21.890625 5.332031 16 C 5.332031 10.109375 10.109375 5.332031 16 5.332031 C 21.890625 5.332031 26.667969 10.109375 26.667969 16 C 26.667969 21.890625 21.890625 26.667969 16 26.667969 Z M 16 26.667969',
  ],
  'pending-tx': [
    'M 25.476562 10.210938 L 20.0625 16 L 24.125 16 C 24.269531 20.636719 20.636719 24.515625 16 24.679688 C 14.667969 24.683594 13.359375 24.332031 12.210938 23.667969 L 10.230469 25.777344 C 11.929688 26.941406 13.941406 27.566406 16 27.574219 C 21.984375 27.574219 26.832031 22.394531 26.832031 16 L 30.894531 16 Z M 7.878906 16 C 7.734375 11.363281 11.363281 7.480469 16 7.320312 C 17.332031 7.316406 18.640625 7.664062 19.792969 8.332031 L 21.769531 6.21875 C 20.070312 5.054688 18.058594 4.429688 16 4.425781 C 10.019531 4.425781 5.167969 9.605469 5.167969 16 L 1.105469 16 L 6.523438 21.785156 L 11.9375 16 Z M 7.878906 16',
  ],
  'success-tx': [
    'M 21.59375 10.613281 L 13.5625 18.644531 L 9.183594 14.28125 L 7.46875 15.996094 L 13.5625 22.097656 L 23.3125 12.34375 Z M 16 3.808594 C 9.269531 3.8125 3.8125 9.269531 3.8125 16 C 3.8125 22.734375 9.269531 28.191406 16 28.191406 C 22.734375 28.191406 28.191406 22.730469 28.191406 16 C 28.1875 9.269531 22.730469 3.8125 16 3.808594 Z M 16 25.753906 C 10.613281 25.753906 6.25 21.386719 6.25 16 C 6.25 10.613281 10.613281 6.25 16 6.25 C 21.386719 6.25 25.753906 10.613281 25.753906 16 C 25.753906 21.386719 21.386719 25.753906 16 25.753906 Z M 16 25.753906',
  ],
  'new-tab': [
    'M 25.332031 25.332031 L 6.667969 25.332031 L 6.667969 6.667969 L 16 6.667969 L 16 4 L 6.667969 4 C 5.1875 4 4 5.199219 4 6.667969 L 4 25.332031 C 4 26.800781 5.1875 28 6.667969 28 L 25.332031 28 C 26.800781 28 28 26.800781 28 25.332031 L 28 16 L 25.332031 16 Z M 18.667969 4 L 18.667969 6.667969 L 23.453125 6.667969 L 10.347656 19.773438 L 12.226562 21.652344 L 25.332031 8.546875 L 25.332031 13.332031 L 28 13.332031 L 28 4 Z M 18.667969 4',
  ],
  warning: [
    'M 1.332031 28 L 30.667969 28 L 16 2.667969 Z M 17.332031 24 L 14.667969 24 L 14.667969 21.332031 L 17.332031 21.332031 Z M 17.332031 18.667969 L 14.667969 18.667969 L 14.667969 13.332031 L 17.332031 13.332031 Z M 17.332031 18.667969',
  ],
  info: [
    'M 16 2.667969 C 8.640625 2.667969 2.667969 8.640625 2.667969 16 C 2.667969 23.359375 8.640625 29.332031 16 29.332031 C 23.359375 29.332031 29.332031 23.359375 29.332031 16 C 29.332031 8.640625 23.359375 2.667969 16 2.667969 Z M 17.332031 22.667969 L 14.667969 22.667969 L 14.667969 14.667969 L 17.332031 14.667969 Z M 17.332031 12 L 14.667969 12 L 14.667969 9.332031 L 17.332031 9.332031 Z M 17.332031 12',
  ],
  notifications: [
    'M 24 14.667969 C 24 10.574219 21.8125 7.148438 18 6.238281 L 18 5.332031 C 18 4.230469 17.105469 3.332031 16 3.332031 C 14.894531 3.332031 14 4.230469 14 5.332031 L 14 6.238281 C 10.171875 7.148438 8 10.558594 8 14.667969 L 8 21.332031 L 5.332031 24 L 5.332031 25.332031 L 26.667969 25.332031 L 26.667969 24 L 24 21.332031 Z M 16 29.332031 C 16.179688 29.335938 16.359375 29.316406 16.535156 29.28125 C 17.390625 29.097656 18.105469 28.511719 18.453125 27.707031 C 18.589844 27.375 18.65625 27.023438 18.652344 26.667969 L 13.320312 26.667969 C 13.332031 28.140625 14.527344 29.332031 16 29.332031 Z M 16 29.332031',
  ],
  'notifications-active': [
    'M 10.105469 5.441406 L 8.199219 3.535156 C 4.902344 6.03125 2.890625 9.867188 2.707031 14 L 5.375 14 C 5.566406 10.574219 7.308594 7.421875 10.105469 5.441406 Z M 26.625 14 L 29.292969 14 C 29.097656 9.871094 27.089844 6.039062 23.800781 3.535156 L 21.90625 5.441406 C 24.691406 7.433594 26.429688 10.578125 26.625 14 Z M 24 14.667969 C 24 10.574219 21.8125 7.148438 18 6.238281 L 18 5.332031 C 18 4.230469 17.105469 3.332031 16 3.332031 C 14.894531 3.332031 14 4.230469 14 5.332031 L 14 6.238281 C 10.171875 7.148438 8 10.558594 8 14.667969 L 8 21.332031 L 5.332031 24 L 5.332031 25.332031 L 26.667969 25.332031 L 26.667969 24 L 24 21.332031 Z M 16 29.332031 C 16.179688 29.335938 16.359375 29.316406 16.535156 29.28125 C 17.390625 29.097656 18.105469 28.511719 18.453125 27.707031 C 18.589844 27.375 18.65625 27.023438 18.652344 26.667969 L 13.320312 26.667969 C 13.332031 28.140625 14.527344 29.332031 16 29.332031 Z M 16 29.332031',
  ],
  search: [
    'M 20.667969 18.667969 L 19.613281 18.667969 L 19.238281 18.308594 C 22.277344 14.765625 21.976562 9.457031 18.554688 6.285156 C 15.132812 3.117188 9.816406 3.21875 6.515625 6.515625 C 3.21875 9.816406 3.117188 15.132812 6.285156 18.554688 C 9.457031 21.976562 14.765625 22.277344 18.308594 19.238281 L 18.667969 19.613281 L 18.667969 20.667969 L 25.332031 27.320312 L 27.320312 25.332031 Z M 12.667969 18.667969 C 9.351562 18.667969 6.667969 15.980469 6.667969 12.667969 C 6.667969 9.351562 9.351562 6.667969 12.667969 6.667969 C 15.980469 6.667969 18.667969 9.351562 18.667969 12.667969 C 18.667969 14.257812 18.039062 15.785156 16.910156 16.910156 C 15.785156 18.039062 14.257812 18.667969 12.667969 18.667969 Z M 12.667969 18.667969',
  ],
  settings: [
    'M 24.613281 17.148438 C 24.664062 16.769531 24.6875 16.382812 24.6875 16 C 24.691406 15.617188 24.660156 15.230469 24.601562 14.851562 L 27.050781 12.921875 C 27.269531 12.738281 27.328125 12.425781 27.195312 12.175781 L 24.890625 8.117188 C 24.75 7.867188 24.449219 7.753906 24.179688 7.847656 L 21.292969 9.023438 C 20.695312 8.554688 20.039062 8.167969 19.339844 7.875 L 18.90625 4.769531 C 18.863281 4.476562 18.609375 4.261719 18.3125 4.265625 L 13.6875 4.265625 C 13.402344 4.269531 13.160156 4.480469 13.121094 4.769531 L 12.679688 7.871094 C 11.980469 8.167969 11.324219 8.554688 10.726562 9.019531 L 7.839844 7.847656 C 7.570312 7.742188 7.265625 7.859375 7.128906 8.117188 L 4.820312 12.171875 C 4.667969 12.421875 4.730469 12.746094 4.964844 12.917969 L 7.421875 14.851562 C 7.285156 15.609375 7.273438 16.386719 7.394531 17.148438 L 4.949219 19.082031 C 4.730469 19.265625 4.671875 19.574219 4.804688 19.824219 L 7.109375 23.882812 C 7.25 24.132812 7.550781 24.246094 7.820312 24.152344 L 10.707031 22.976562 C 11.304688 23.445312 11.960938 23.832031 12.660156 24.125 L 13.09375 27.230469 C 13.140625 27.523438 13.394531 27.734375 13.6875 27.734375 L 18.3125 27.734375 C 18.601562 27.734375 18.84375 27.519531 18.878906 27.230469 L 19.3125 24.128906 C 20.011719 23.835938 20.671875 23.449219 21.265625 22.980469 L 24.152344 24.152344 C 24.421875 24.257812 24.726562 24.140625 24.863281 23.882812 L 27.171875 19.828125 C 27.320312 19.578125 27.257812 19.257812 27.03125 19.082031 Z M 16 20.398438 C 14.214844 20.421875 12.59375 19.367188 11.894531 17.722656 C 11.195312 16.082031 11.558594 14.179688 12.8125 12.910156 C 14.066406 11.640625 15.960938 11.253906 17.613281 11.929688 C 19.265625 12.605469 20.34375 14.214844 20.34375 16 C 20.351562 18.410156 18.410156 20.375 16 20.398438 Z M 16 20.398438',
  ],
  'x-mark': [
    'M 32 3.222656 L 28.777344 0 L 16 12.777344 L 3.222656 0 L 0 3.222656 L 12.777344 16 L 0 28.777344 L 3.222656 32 L 16 19.222656 L 28.777344 32 L 32 28.777344 L 19.222656 16 Z M 32 3.222656',
  ],
  discord: [
    'M27.0976 1.99388C25.0234 1.05638 22.832 0.38451 20.582 0.00169781C20.5429 -0.00611519 20.5 0.0134158 20.4765 0.0524788C20.1796 0.583729 19.9101 1.13451 19.6679 1.69701C17.2421 1.33373 14.7773 1.33373 12.3515 1.69701C12.1093 1.13451 11.832 0.583729 11.5273 0.0524788C11.5078 0.0134158 11.4648 -0.00611519 11.4218 0.00169781C9.17574 0.38451 6.98433 1.05638 4.91011 1.99388C4.89449 2.0017 4.87886 2.01732 4.86714 2.03295C1.16011 7.27123 -0.519575 13.6501 0.140581 20.0056C0.144488 20.0369 0.160113 20.0603 0.18355 20.0798C2.59761 21.8454 5.30074 23.1931 8.17183 24.0642C8.2148 24.0759 8.25777 24.0603 8.28511 24.029C8.9023 23.2009 9.44917 22.322 9.91792 21.4079C9.93355 21.3806 9.93355 21.3494 9.92183 21.3259C9.91011 21.2986 9.89058 21.2751 9.86324 21.2673C8.99996 20.9431 8.16402 20.5486 7.36714 20.0915C7.33589 20.0759 7.31636 20.0447 7.31636 20.0134C7.31246 19.9783 7.32808 19.947 7.35542 19.9236C7.52339 19.8025 7.69136 19.6736 7.85152 19.5408C7.88277 19.5173 7.92183 19.5134 7.95699 19.529C13.0507 21.8884 18.9414 21.8884 24.039 19.529C24.0703 19.5134 24.1132 19.5173 24.1406 19.5408C24.3007 19.6736 24.4687 19.8064 24.6406 19.9275C24.6679 19.947 24.6835 19.9783 24.6796 20.0134C24.6796 20.0447 24.6601 20.0759 24.6289 20.0954C23.832 20.5525 22.996 20.947 22.1328 21.2673C22.1054 21.2751 22.0859 21.2986 22.0742 21.3259C22.0625 21.3533 22.0664 21.3806 22.0781 21.4079C22.5586 22.3181 23.1015 23.197 23.7109 24.029C23.7382 24.0642 23.7812 24.0798 23.8242 24.0681C26.6992 23.197 29.4062 21.8494 31.8242 20.0837C31.8476 20.0642 31.8632 20.0408 31.8632 20.0095C32.539 13.6501 30.8593 7.26732 27.1328 2.03685C27.1289 2.01732 27.1132 2.0056 27.0976 1.99388ZM10.6992 16.4197C9.02339 16.3142 7.73824 14.8962 7.82417 13.2361C7.73042 11.5759 9.01558 10.1501 10.6992 10.0525C11.5117 10.0954 12.2695 10.4548 12.8125 11.0525C13.3515 11.6501 13.6289 12.4353 13.5781 13.2361C13.6718 14.9001 12.3867 16.322 10.6992 16.4197ZM21.3359 16.4197C19.6562 16.3142 18.375 14.8962 18.457 13.2361C18.3632 11.5759 19.6523 10.1501 21.3359 10.0525C22.1445 10.0954 22.9062 10.4548 23.4453 11.0525C23.9843 11.6501 24.2617 12.4353 24.2109 13.2361C24.2578 14.0369 23.9804 14.8181 23.4414 15.4158C22.9023 16.0134 22.1445 16.3767 21.3359 16.4197Z',
  ],
  'trend-arrow-up': [
    'M16.8556 0.714233C17.4618 0.714194 18.0433 0.955012 18.472 1.3837L33.3313 16.2431L30.0988 19.4756L19.1414 8.51815V32.7148H14.57V8.51918L3.6167 19.4754L0.383789 16.2433L15.2393 1.38392C15.6679 0.955168 16.2493 0.714273 16.8556 0.714233Z',
  ],
  'trend-arrow-down': [
    'M14.57 24.1956V0H19.1414V24.1966L30.0988 13.2392L33.3313 16.4717L18.472 31.3311C18.0433 31.7598 17.4618 32.0006 16.8556 32.0006C16.2493 32.0005 15.6679 31.7596 15.2393 31.3309L0.383789 16.4715L3.6167 13.2394L14.57 24.1956Z',
  ],
  'fastbtc-deposit': [
    'M 16.3125 23.667969 L 11.042969 18.375 L 14.996094 18.375 L 14.996094 9.082031 L 17.632812 9.082031 L 17.632812 18.375 L 21.582031 18.375 Z M 16.3125 23.667969',
  ],
  'fastbtc-transfer': [
    'M 21.269531 22.644531 L 21.269531 13.347656 L 18.632812 13.347656 L 18.632812 22.640625 L 14.683594 22.640625 L 19.953125 27.933594 L 25.222656 22.640625 Z M 12.046875 4.066406 L 6.777344 9.359375 L 10.730469 9.359375 L 10.730469 18.652344 L 13.363281 18.652344 L 13.363281 9.359375 L 17.316406 9.359375 Z M 12.046875 4.066406',
  ],
  'fastbtc-withdraw': [
    'M 16.3125 8.332031 L 11.042969 13.625 L 14.996094 13.625 L 14.996094 22.917969 L 17.632812 22.917969 L 17.632812 13.625 L 21.582031 13.625 Z M 16.3125 8.332031',
  ],
  'chevron-left': [
    'M 22.199219 5.136719 L 19.867188 2.773438 L 6.796875 16 L 19.867188 29.230469 L 22.199219 26.863281 L 11.472656 16 Z M 22.199219 5.136719',
  ],
  'chevron-double-left': [
    'm19.01,5.74l-2.27,-2.24l-12.73,12.52l12.73,12.52l2.27,-2.24l-10.46,-10.28l10.46,-10.28z',
    'm28,5.74l-2.27,-2.24l-12.73,12.52l12.73,12.52l2.27,-2.24l-10.46,-10.28l10.46,-10.28z',
  ],
  'chevron-right': [
    'M 7.578125 26.578125 L 18.429688 16 L 7.578125 5.421875 L 10.5 2.578125 L 24.269531 16 L 10.5 29.425781 Z M 7.578125 26.578125',
  ],
  'chevron-down': [
    'M 28.242188 0.53125 L 16 12.234375 L 3.757812 0.53125 L 0 4.132812 L 16 19.46875 L 32 4.132812 Z M 28.242188 0.53125',
  ],
  'arrow-down-wide': [
    'M15.9609 27.5078L24.9258 18.6172H18.2031V3H13.7227V18.6172H7L15.9609 27.5078Z',
  ],
  'arrow-right-long': [
    'M 21.347656 14.667969 L 5.332031 14.667969 L 5.332031 17.332031 L 21.347656 17.332031 L 21.347656 21.332031 L 26.667969 16 L 21.347656 10.667969 Z M 21.347656 14.667969',
  ],
  'arrows-swap': [
    'M7.32422 10.0117L2 15.3477L7.32422 20.6875V16.6836H16.6836V14.0156H7.32422V10.0117ZM26.0274 7.33985L20.6992 2V6.00781H11.3438V8.67579H20.6992V12.6797L26.0274 7.33985Z',
  ],
};
