import React from 'react';
import Svg, { Path } from 'react-native-svg';

// First SVG (Briefcase with a lock)
export const BriefcaseIcon = ({ width = 24, height = 24, color = '#2B2A2A' }) => (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
            d="M10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6568 22 17.7712 22 14V12.6171C22 10.791 22 9.87804 21.6284 9.0772C21.2568 8.27636 20.5595 7.68688 19.1651 6.50793L18.4564 5.90873C15.3724 3.30128 13.8304 1.99756 12 1.99756C10.1696 1.99756 8.62758 3.30128 5.54359 5.90873L4.83487 6.50793C3.44045 7.68688 2.74324 8.27636 2.37162 9.0772C2 9.87804 2 10.791 2 12.6171V14C2 17.7712 2 19.6568 3.17157 20.8284C4.34315 22 6.22876 22 10 22Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <Path
            d="M8 21.5V17C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17V21.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </Svg>
);

// Second SVG (Bookmark)
export const BookmarkIcon = ({ width = 19, height = 24, color = '#2B2A2A' }) => (
    <Svg width={width} height={height} viewBox="0 0 19 24" fill="none">
        <Path
            d="M1 6.33413V21.2697C1 22.1552 2.00281 22.6566 2.70692 22.1232L4.53119 20.7576C4.95792 20.4376 5.55534 20.4802 5.9394 20.8643L7.71034 22.6459C8.1264 23.062 8.80917 23.062 9.22523 22.6459L11.0175 20.8536C11.3909 20.4802 11.9883 20.4376 12.4044 20.7576L14.2286 22.1232C14.9327 22.6459 15.9356 22.1445 15.9356 21.2697V3.13365C15.9356 1.96014 16.8957 1 18.0692 1H6.33413H5.2673C2.06683 1 1 2.90962 1 5.2673V6.33413Z"
            stroke={color}
            strokeWidth="1.60024"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

// Third SVG (Chat bubble with dots)
export const ChatIcon = ({ width = 27, height = 27, color = '#2B2A2A' }) => (
    <Svg width={width} height={height} viewBox="0 0 27 27" fill="none">
        <Path
            d="M9.44583 21.1142H8.8902C4.44509 21.1142 2.22253 20.003 2.22253 14.4466V8.8902C2.22253 4.44509 4.44509 2.22253 8.8902 2.22253H17.7804C22.2255 2.22253 24.4481 4.44509 24.4481 8.8902V14.4466C24.4481 18.8917 22.2255 21.1142 17.7804 21.1142H17.2248C16.8803 21.1142 16.5469 21.2809 16.3358 21.5588L14.6688 23.7813C13.9354 24.7592 12.7352 24.7592 12.0018 23.7813L10.3349 21.5588C10.1571 21.3143 9.74588 21.1142 9.44583 21.1142Z"
            stroke={color}
            strokeWidth="1.84271"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M17.7765 12.224H17.7865"
            stroke={color}
            strokeWidth="2.45694"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M13.3303 12.224H13.3403"
            stroke={color}
            strokeWidth="2.45694"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8.88413 12.224H8.89411"
            stroke={color}
            strokeWidth="2.45694"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

