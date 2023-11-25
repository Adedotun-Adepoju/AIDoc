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
      default:
        return null;
    }
  }
  