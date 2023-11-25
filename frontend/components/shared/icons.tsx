export default function Icons({
    type,
    className,
  }: {
    type: string;
    className?: string;
  }): JSX.Element | null {
    switch (type) {
       case 'logo':
        return (
            <svg width="120" height="64" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8971 28.4787C20.2253 28.4787 21.302 27.3899 21.302 26.0468C21.302 24.7036 20.2253 23.6148 18.8971 23.6148C17.5689 23.6148 16.4922 24.7036 16.4922 26.0468C16.4922 27.3899 17.5689 28.4787 18.8971 28.4787Z" fill="#1CA1FE"/>
            <path d="M29.4403 28.4787C30.7685 28.4787 31.8452 27.3899 31.8452 26.0468C31.8452 24.7036 30.7685 23.6148 29.4403 23.6148C28.1121 23.6148 27.0354 24.7036 27.0354 26.0468C27.0354 27.3899 28.1121 28.4787 29.4403 28.4787Z" fill="#1CA1FE"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66942 27.6762C4.27683 27.7965 4.23356 28.1435 5.97619 28.0755C6.91358 28.0388 7.53258 27.8731 8.03876 27.6058C10.0797 26.5297 5.84482 25.5584 3.97313 26.8001C3.36108 27.2065 2.99787 27.1455 2.30082 27.4683C-1.56003 29.2509 0.240566 32.3689 1.91906 34.4485C3.03187 35.8278 4.33866 37.2852 5.60525 38.6325C6.29767 39.3687 6.91513 40.0196 7.57586 40.7292C8.45298 41.6717 7.52099 41.1481 7.72656 41.8592C7.87648 42.3797 12.3718 46.2363 12.9931 46.7825C13.7566 47.4531 14.5333 48.0579 15.3377 48.6909C16.8764 49.9022 16.4722 49.3106 17.0858 50.8306C17.4065 51.6246 17.5889 52.6155 18.5208 53.1258C19.8678 53.8627 20.8469 53.7205 23.1421 53.8229C23.2248 54.4113 23.5888 55.2319 23.5092 55.9391L24.5718 55.7961H25.0996C25.1568 55.1702 25.2109 54.5215 25.309 53.8213C27.6938 53.7338 28.6598 53.8682 30.0392 53.1094C31.3962 52.3623 31.3839 50.2922 32.0554 49.5982L35.5291 46.8161C36.1906 46.2699 40.5855 42.486 40.8196 41.9194C41.1195 41.1926 40.1071 41.6209 40.9502 40.7628C41.6071 40.0939 42.2755 39.3983 42.8799 38.7161C44.8574 36.4834 49.447 32.2517 48.3945 29.4306C48.2407 29.018 48.0027 28.6366 47.6271 28.3045C47.0885 27.8286 46.3134 27.4058 45.3991 27.1604C44.6665 26.9635 45.0097 27.1143 44.6248 26.7954C44.2948 26.5227 43.6024 26.3102 42.7207 26.2414C39.1674 25.9663 39.1859 27.9552 42.6133 28.0771C44.0615 28.1287 44.2253 27.9309 44.7856 27.666C48.9424 28.7054 47.1155 32.1798 45.8458 33.8967C44.8914 35.1862 42.0545 38.2386 40.7964 39.5906C38.1203 42.4633 39.5097 39.8743 37.4193 42.0085C36.533 42.9134 35.5708 43.845 34.5763 44.6929C30.5292 48.1447 32.2548 47.768 24.2959 47.768C17.4436 47.768 17.9042 48.0947 15.4877 46.0112C14.9977 45.5892 14.5109 45.161 13.9908 44.7069C12.7466 43.6176 11.2999 42.0171 10.4815 41.3263C10.038 40.9519 9.70953 41.1496 9.14925 40.9566C8.61912 40.7745 3.20266 34.5211 2.73203 33.9038C1.26683 31.9821 -0.277202 29.0008 3.66942 27.6762Z" fill="#1CA1FE"/>
            <path d="M25.1041 54.652C25.0067 60.9078 27.1713 62.6591 30.2725 62.0206C33.8389 61.2868 38.5792 57.8741 42.8859 54.1566C44.8782 52.4381 46.4554 50.8572 47.8611 49.4482C52.426 44.8742 55.2636 42.0311 64.1306 41.8858C81.0871 41.606 110.207 41.6842 110.292 41.6842V43.5074C110.207 43.5074 81.1118 43.4292 64.1592 43.709C56.0194 43.8426 53.3804 46.4871 49.1339 50.7423C47.7019 52.1771 46.0953 53.7877 44.0598 55.5437C39.5622 59.4253 34.5553 63.0006 30.6334 63.8078C26.2455 64.7112 23.1783 62.5567 23.3012 54.6239L25.1041 54.652Z" fill="#08426B"/>
            <path d="M114.537 37.4744C115.89 37.4744 117.116 38.0292 118.002 38.9263C118.889 39.8227 119.437 41.0613 119.437 42.4297C119.437 43.7981 118.889 45.0367 118.002 45.9339C117.116 46.8302 115.89 47.3851 114.537 47.3851C113.185 47.3851 111.959 46.8302 111.073 45.9339C110.186 45.0367 109.637 43.7981 109.637 42.4297C109.637 41.0613 110.186 39.8227 111.073 38.9263C111.959 38.0292 113.185 37.4744 114.537 37.4744ZM117.174 39.7641C116.499 39.0819 115.567 38.6599 114.537 38.6599C113.508 38.6599 112.576 39.0819 111.901 39.7641C111.227 40.4463 110.81 41.3888 110.81 42.4297C110.81 43.4706 111.227 44.4139 111.901 45.0953C112.576 45.7776 113.508 46.1996 114.537 46.1996C115.567 46.1996 116.499 45.7776 117.174 45.0953C117.848 44.4139 118.265 43.4706 118.265 42.4297C118.265 41.3888 117.848 40.4463 117.174 39.7641Z" fill="#08426B"/>
            <path d="M114.537 44.9414C115.909 44.9414 117.021 43.8169 117.021 42.4297C117.021 41.0425 115.909 39.918 114.537 39.918C113.165 39.918 112.053 41.0425 112.053 42.4297C112.053 43.8169 113.165 44.9414 114.537 44.9414Z" fill="#1CA1FE"/>
            <path d="M51.865 38.0808H54.6748L55.2258 34.264H58.6694V34.2085L59.2204 38.0808H62.2505L59.1099 18.5798H55.0048L51.865 38.0808ZM55.5836 31.6179L56.9059 21.9784H56.9615L58.3108 31.6179H55.5836Z" fill="#08426B"/>
            <path d="M63.7104 38.0808H66.7413V18.5798H63.7104V38.0808Z" fill="#08426B"/>
            <path d="M68.5588 29.7236H74.6198V26.9377H68.5588V29.7236Z" fill="#08426B"/>
            <path d="M76.4382 38.0808H81.0657C84.0966 38.0808 85.5842 36.3811 85.5842 33.2614V23.3991C85.5842 20.2795 84.0966 18.5798 81.0657 18.5798H76.4382V38.0808ZM79.4683 35.2948V21.3657H81.0108C81.9753 21.3657 82.5533 21.8674 82.5533 23.26V33.4005C82.5533 34.7931 81.9753 35.2948 81.0108 35.2948H79.4683Z" fill="#08426B"/>
            <path d="M92.0028 38.359C94.978 38.359 96.6032 36.5764 96.6032 33.456V23.2045C96.6032 20.0841 94.978 18.3015 92.0028 18.3015C89.0276 18.3015 87.4016 20.0841 87.4016 23.2045V33.456C87.4016 36.5764 89.0276 38.359 92.0028 38.359ZM92.0028 35.5738C91.0383 35.5738 90.4325 35.0439 90.4325 33.6514V23.0092C90.4325 21.6166 91.0383 21.0875 92.0028 21.0875C92.9665 21.0875 93.5731 21.6166 93.5731 23.0092V33.6514C93.5731 35.0439 92.9665 35.5738 92.0028 35.5738Z" fill="#08426B"/>
            <path d="M102.912 38.359C105.832 38.359 107.374 36.5764 107.374 33.5677V30.8099H104.51V33.7905C104.51 35.0721 103.904 35.5738 102.994 35.5738C102.085 35.5738 101.48 35.0721 101.48 33.7905V22.8982C101.48 21.6166 102.085 21.0875 102.994 21.0875C103.904 21.0875 104.51 21.6166 104.51 22.8982V25.1543H107.374V23.0928C107.374 20.0841 105.832 18.3015 102.912 18.3015C99.992 18.3015 98.4487 20.0841 98.4487 23.0928V33.5677C98.4487 36.5764 99.992 38.359 102.912 38.359Z" fill="#08426B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6485 29.3603C13.2234 27.9606 13.6925 22.5395 14.3787 21.6385C15.531 20.1232 19.5046 20.6476 21.7674 20.6257C24.5849 20.5983 27.3639 20.6437 30.1792 20.6624C33.9449 20.6874 34.6984 20.6866 34.9944 24.4502C35.3522 29.011 35.7826 29.6705 33.2811 30.9975C30.6057 32.4159 29.6189 31.6649 26.5069 31.0623C20.9923 29.994 19.0271 32.9582 16.0974 31.3405C14.9947 30.7325 13.9916 30.4926 13.6485 29.3603ZM24.4938 44.1498C29.2673 44.1107 31.9334 40.3205 33.9944 38.2222C35.9882 36.1927 39.7215 33.2473 40.5577 29.6072C41.8173 24.122 38.3321 21.3454 36.1165 19.1026C34.2177 17.1817 30.7379 13.1297 28.2758 11.7911C28.2109 9.14264 27.6761 8.6378 25.1081 8.46822C25.0169 7.61719 24.9984 6.43559 25.0177 5.57049C25.0548 3.93877 25.02 4.68273 25.9056 3.777C27.1908 2.46177 26.4968 0.397889 24.942 0.0641974C23.0989 -0.332012 21.6893 1.16139 22.3044 3.01115C22.9868 5.06253 24.0486 2.38128 23.6275 8.46978C21.0703 8.63702 20.5062 9.15123 20.459 11.7981C18.1214 13.007 14.3177 17.388 12.4901 19.2276C10.3262 21.4048 6.78766 24.344 8.20959 29.7956C9.13616 33.3489 12.9475 36.4319 14.9722 38.4832C17.058 40.5971 19.619 44.1904 24.4938 44.1498Z" fill="#08426B"/>
            </svg>
        );
        case 'arrow':
            return (
                <svg width="57" height="27" viewBox="0 0 57 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.8879 0H48.315L57 13.0215L48.315 26.0431H34.8879L43.6795 13.0215L34.8879 0Z" fill="#1CA1FE"/>
                <path d="M17.5259 0H30.8535L39.4741 13.0215L30.8535 26.0431H17.5259L26.2523 13.0215L17.5259 0Z" fill="#1CA1FE"/>
                <path d="M0 0H13.4271L22.1121 13.0215L13.4271 26.0431H0L8.79154 13.0215L0 0Z" fill="#1CA1FE"/>
                </svg>
            );
        case 'bot':
            return (
                <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35.5" cy="35.5" r="35" fill="#08426B" fill-opacity="0.15" stroke="#08426B"/>
                <path d="M37.6875 20.9166C37.6875 21.5645 37.4059 22.1466 36.9583 22.5471V25.2916H44.25C46.6663 25.2916 48.625 27.2504 48.625 29.6666V44.25C48.625 46.6663 46.6663 48.625 44.25 48.625H26.75C24.3338 48.625 22.375 46.6663 22.375 44.25V29.6666C22.375 27.2504 24.3338 25.2916 26.75 25.2916H34.0417V22.5471C33.5941 22.1466 33.3125 21.5645 33.3125 20.9166C33.3125 19.7085 34.2919 18.7291 35.5 18.7291C36.7081 18.7291 37.6875 19.7085 37.6875 20.9166ZM18 32.5833H20.9167V41.3333H18V32.5833ZM53 32.5833H50.0833V41.3333H53V32.5833ZM31.125 39.1458C32.3331 39.1458 33.3125 38.1664 33.3125 36.9583C33.3125 35.7502 32.3331 34.7708 31.125 34.7708C29.9169 34.7708 28.9375 35.7502 28.9375 36.9583C28.9375 38.1664 29.9169 39.1458 31.125 39.1458ZM42.0625 36.9583C42.0625 35.7502 41.0831 34.7708 39.875 34.7708C38.6669 34.7708 37.6875 35.7502 37.6875 36.9583C37.6875 38.1664 38.6669 39.1458 39.875 39.1458C41.0831 39.1458 42.0625 38.1664 42.0625 36.9583Z" fill="#08426B"/>
                </svg>
            )
        case 'brain':
            return (
                <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35.5" cy="35.5" r="35" fill="#1CA1FE" fill-opacity="0.15" stroke="#1CA1FE"/>
                <path d="M33.75 24.1689C33.0146 23.7435 32.1607 23.5 31.25 23.5C28.4886 23.5 26.25 25.7386 26.25 28.5V30.7178C25.1862 31.1455 24.3143 31.8098 23.6766 32.6867C22.8655 33.8019 22.5 35.1684 22.5 36.625C22.5 38.5767 23.4941 40.2945 25 41.3025V42.875C25 45.9816 27.5184 48.5 30.625 48.5C31.7813 48.5 32.8562 48.1511 33.75 47.5528V42.875C33.75 41.2087 33.3375 40.1434 32.6752 39.426C31.9968 38.691 30.8953 38.1456 29.1695 37.858L29.5805 35.392C31.2075 35.6631 32.6322 36.1716 33.75 37.0339V24.1689ZM36.25 24.1689V37.0339C37.3678 36.1716 38.7925 35.6631 40.4195 35.392L40.8305 37.858C39.1047 38.1456 38.0033 38.691 37.3248 39.426C36.6625 40.1434 36.25 41.2087 36.25 42.875V47.5528C37.1438 48.1511 38.2186 48.5 39.375 48.5C42.4816 48.5 45 45.9816 45 42.875V41.3025C46.5059 40.2945 47.5 38.5767 47.5 36.625C47.5 35.1684 47.1345 33.8019 46.3234 32.6867C45.6858 31.8098 44.8139 31.1455 43.75 30.7178V28.5C43.75 25.7386 41.5114 23.5 38.75 23.5C37.8392 23.5 36.9854 23.7435 36.25 24.1689Z" fill="#1CA1FE"/>
                </svg>
            )
        case 'chat':
            return (
                <svg width="71" height="72" viewBox="0 0 71 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35.5" cy="36" r="35" fill="#08701F" fill-opacity="0.1" stroke="#08701F"/>
                <g clip-path="url(#clip0_13_299)">
                <path d="M46.25 25.25H23.75C22.375 25.25 21.25 26.375 21.25 27.75V42.75C21.25 44.125 22.375 45.25 23.75 45.25H30V46.5C30 47.1875 30.5625 47.75 31.25 47.75H38.75C39.4375 47.75 40 47.1875 40 46.5V45.25H46.25C47.625 45.25 48.75 44.125 48.75 42.75V27.75C48.75 26.375 47.625 25.25 46.25 25.25ZM45 42.75H25C24.3125 42.75 23.75 42.1875 23.75 41.5V29C23.75 28.3125 24.3125 27.75 25 27.75H45C45.6875 27.75 46.25 28.3125 46.25 29V41.5C46.25 42.1875 45.6875 42.75 45 42.75ZM42.5 31.5H31.25C30.5625 31.5 30 32.0625 30 32.75C30 33.4375 30.5625 34 31.25 34H42.5C43.1875 34 43.75 33.4375 43.75 32.75C43.75 32.0625 43.1875 31.5 42.5 31.5ZM42.5 36.5H31.25C30.5625 36.5 30 37.0625 30 37.75C30 38.4375 30.5625 39 31.25 39H42.5C43.1875 39 43.75 38.4375 43.75 37.75C43.75 37.0625 43.1875 36.5 42.5 36.5ZM28.75 31.5H26.25V34H28.75V31.5ZM28.75 36.5H26.25V39H28.75V36.5Z" fill="#08701F"/>
                </g>
                <defs>
                <clipPath id="clip0_13_299">
                <rect width="30" height="30" fill="white" transform="translate(20 21.5)"/>
                </clipPath>
                </defs>
                </svg>                
            )
        case 'innovate':
            return (
                <svg width="71" height="72" viewBox="0 0 71 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35.5" cy="36" r="35" fill="#176BA6" fill-opacity="0.1" stroke="#176BA6"/>
                <g clip-path="url(#clip0_13_325)">
                <path d="M37.5 33.375H41.25C41.9375 33.375 42.5 32.8125 42.5 32.125C42.5 31.4375 41.9375 30.875 41.25 30.875H37.5C36.8125 30.875 36.25 31.4375 36.25 32.125C36.25 32.8125 36.8125 33.375 37.5 33.375ZM37.5 42.125H41.25C41.9375 42.125 42.5 41.5625 42.5 40.875C42.5 40.1875 41.9375 39.625 41.25 39.625H37.5C36.8125 39.625 36.25 40.1875 36.25 40.875C36.25 41.5625 36.8125 42.125 37.5 42.125ZM43.75 47.75H26.25C24.875 47.75 23.75 46.625 23.75 45.25V27.75C23.75 26.375 24.875 25.25 26.25 25.25H43.75C45.125 25.25 46.25 26.375 46.25 27.75V45.25C46.25 46.625 45.125 47.75 43.75 47.75ZM28.75 35.25H32.5C33.1875 35.25 33.75 34.6875 33.75 34V30.25C33.75 29.5625 33.1875 29 32.5 29H28.75C28.0625 29 27.5 29.5625 27.5 30.25V34C27.5 34.6875 28.0625 35.25 28.75 35.25ZM28.75 30.25H32.5V34H28.75V30.25ZM28.75 44H32.5C33.1875 44 33.75 43.4375 33.75 42.75V39C33.75 38.3125 33.1875 37.75 32.5 37.75H28.75C28.0625 37.75 27.5 38.3125 27.5 39V42.75C27.5 43.4375 28.0625 44 28.75 44ZM28.75 39H32.5V42.75H28.75V39Z" fill="#105E96"/>
                </g>
                <defs>
                <clipPath id="clip0_13_325">
                <rect width="30" height="30" fill="white" transform="translate(20 21.5)"/>
                </clipPath>
                </defs>
                </svg>
            )
      default:
        return null;
    }
  }
  