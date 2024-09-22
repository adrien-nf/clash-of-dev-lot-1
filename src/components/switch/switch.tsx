import * as RadixSwitch from "@radix-ui/react-switch";

export function Switch() {
  return (
    <RadixSwitch.Root
      className="w-[54px] h-[29px] bg-[#848482] rounded-full relative transition-all data-[state=checked]:bg-cod-dark outline-none cursor-default"
      style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
    >
      <RadixSwitch.Thumb className="block w-[23px] h-[23px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[29px]">
        <svg
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.700989" width="23" height="23" rx="11.5" fill="#F3F3F1" />
          <path
            d="M14.1738 19.6812C13.6563 19.8187 13.1668 19.899 12.6777 19.9252C11.8421 19.9729 11.0373 19.8713 10.2896 19.6278C9.02103 19.2133 7.95659 18.4311 7.12494 17.2984C6.60564 16.5914 6.21321 15.7862 5.95975 14.9068C5.70677 14.0293 5.62092 13.1406 5.7072 12.2684C5.79646 11.3602 6.06764 10.4991 6.51102 9.71055C6.98103 8.8755 7.61884 8.15157 8.40986 7.55301C9.0971 7.03188 9.86422 6.61825 10.6914 6.32156C10.9063 6.24366 11.1237 6.17548 11.3417 6.11753C11.7587 6.00668 12.1846 5.93085 12.608 5.89304L12.6792 5.88657C13.0072 5.85545 13.3456 5.8257 13.7471 5.87679C13.7471 5.87679 13.7803 5.8804 14.316 5.9581C14.3308 5.96041 14.3432 5.96956 14.3523 5.98167C14.7368 6.65186 15.0865 7.35209 15.392 8.06196C15.7622 8.92284 16.0785 9.81879 16.3303 10.7236C16.3367 10.7489 16.3251 10.7748 16.3009 10.7833C16.3009 10.7833 16.0762 10.8783 16.0724 10.8794C16.061 10.8824 16.0468 10.882 16.0377 10.8782C15.5749 10.6731 15.0938 10.5311 14.6076 10.4569C14.3273 10.413 13.8601 10.342 13.2661 10.4252C13.1058 10.4471 12.946 10.4792 12.7887 10.521C12.7166 10.5401 12.6465 10.5588 12.574 10.5843C12.1236 10.731 11.7343 10.903 11.3837 11.1083C10.8381 11.4298 10.4689 11.7771 10.2255 12.2052C9.95347 12.6803 9.88459 13.1824 10.0178 13.6993C10.106 14.0392 10.2432 14.3246 10.4365 14.5764C10.714 14.9366 11.0773 15.1722 11.5154 15.28C11.9773 15.3939 12.4556 15.381 12.9768 15.2424C13.0565 15.2213 13.1337 15.1987 13.2118 15.1717C13.7493 14.9935 14.2401 14.7509 14.6701 14.4518C14.8424 14.3333 15.0064 14.1983 15.1594 14.0518C15.5191 13.707 15.7241 13.3743 15.9215 13.0519C16.1362 12.702 16.327 12.3295 16.4858 11.9426C16.4909 11.9309 16.5008 11.922 16.5117 11.917L16.7317 11.8191C16.7525 11.8136 16.7754 11.8241 16.7865 11.844C17.1453 12.5085 17.4759 13.1972 17.7718 13.8931C18.1343 14.7477 18.4524 15.6348 18.7155 16.5283C18.7185 16.54 18.719 16.5502 18.7139 16.562C18.7065 16.5806 18.6968 16.606 18.6842 16.6363C18.4291 17.2419 17.9726 17.5958 17.443 18.0044C17.3685 18.0616 17.2926 18.1212 17.2166 18.1809C16.515 18.7328 15.7205 19.1662 14.8582 19.4681C14.6276 19.5481 14.3989 19.6193 14.1771 19.6782L14.1738 19.6812Z"
            fill="#262625"
          />
          <path
            d="M11.3507 6.16912C11.764 6.05927 12.1842 5.98495 12.6076 5.94715C12.9536 5.91538 13.3119 5.87619 13.7367 5.93147C13.7367 5.93147 13.7699 5.93508 14.3051 6.01083C14.6529 6.61604 15.0067 7.30892 15.3414 8.08579C15.7543 9.04329 16.0545 9.93938 16.2777 10.7396C16.203 10.772 16.1277 10.8024 16.053 10.8347C15.4805 10.5799 14.9758 10.4649 14.61 10.4106C14.2965 10.3631 13.8402 10.2954 13.2543 10.3785C13.092 10.4009 12.9322 10.433 12.7711 10.4758C12.6991 10.4949 12.6252 10.5146 12.5546 10.5396C12.1359 10.6758 11.7337 10.845 11.3534 11.0686C10.8801 11.3481 10.4577 11.6929 10.1773 12.1827C9.90387 12.6603 9.8237 13.1737 9.96517 13.7154C10.0505 14.0436 10.1878 14.3456 10.3927 14.6109C10.6793 14.9832 11.0498 15.2231 11.4983 15.3323C12.0012 15.4561 12.4968 15.424 12.984 15.2945C13.0636 15.2733 13.1427 15.2502 13.2227 15.2227C13.7456 15.0505 14.2379 14.8138 14.6938 14.4974C14.8708 14.3735 15.0348 14.2386 15.1878 14.092C15.5456 13.7477 15.7455 13.4267 15.9574 13.0818C16.1268 12.8084 16.3313 12.4342 16.5259 11.9652C16.5969 11.9338 16.6679 11.9025 16.7388 11.8712C17.07 12.4829 17.4029 13.1647 17.7231 13.9164C18.1205 14.8531 18.4263 15.7394 18.6653 16.5458C18.6593 16.562 18.6496 16.5874 18.6351 16.6182C18.3499 17.2962 17.8045 17.6509 17.1825 18.1422C16.471 18.703 15.6878 19.1251 14.8383 19.4215C14.6134 19.4999 14.3884 19.5701 14.1609 19.6306C13.6738 19.7601 13.1796 19.8458 12.673 19.8746C11.8672 19.9206 11.0735 19.8305 10.3015 19.5789C9.011 19.1579 7.97219 18.373 7.16171 17.2679C6.63566 16.5502 6.25377 15.7547 6.00475 14.8928C5.7572 14.0367 5.66532 13.1641 5.75334 12.2749C5.84169 11.371 6.10826 10.5236 6.55023 9.7375C7.02816 8.88581 7.66423 8.17895 8.43497 7.59617C9.1312 7.07058 9.88793 6.66386 10.7023 6.37263C10.9153 6.29524 11.1313 6.22951 11.3493 6.17157M11.3247 6.07431C11.1067 6.13225 10.8874 6.20093 10.6705 6.27934C9.8396 6.57704 9.06918 6.99363 8.37675 7.51821C7.58054 8.12022 6.93802 8.84956 6.46521 9.68951C6.01763 10.4854 5.74554 11.3509 5.65636 12.2674C5.56917 13.144 5.65601 14.0366 5.91096 14.9218C6.1659 15.8071 6.56122 16.6156 7.08389 17.328C7.9218 18.4694 8.9939 19.2579 10.2734 19.6757C11.0278 19.9215 11.8387 20.0237 12.6806 19.9764C13.1734 19.9492 13.6667 19.8679 14.188 19.7293C14.4098 19.6703 14.6405 19.5986 14.873 19.5182C15.7409 19.2148 16.5392 18.7804 17.2455 18.223C17.3234 18.1629 17.3974 18.1038 17.4719 18.0466C18.0062 17.6325 18.4684 17.2771 18.7281 16.6579C18.7407 16.6275 18.7518 16.5997 18.7578 16.5835C18.7667 16.5625 18.7669 16.5396 18.7615 16.5182C18.4979 15.6227 18.1798 14.7356 17.8163 13.8771C17.5199 13.1793 17.1889 12.4887 16.8282 11.8246C16.8059 11.7848 16.7601 11.7638 16.7184 11.7749C16.7127 11.7764 16.7089 11.7774 16.7033 11.7789L16.4904 11.8729C16.4667 11.8833 16.4493 11.9025 16.4391 11.926C16.2817 12.3104 16.0923 12.6805 15.879 13.0279C15.6745 13.3625 15.4794 13.6781 15.1244 14.0175C14.9747 14.1611 14.8126 14.2956 14.6422 14.4135C14.216 14.7116 13.7285 14.9513 13.1962 15.126C13.1175 15.151 13.0389 15.1761 12.9631 15.1962C12.4494 15.3328 11.9792 15.3457 11.5235 15.2322C11.0964 15.1277 10.7422 14.8959 10.4714 14.5463C10.2819 14.3019 10.1476 14.0199 10.0613 13.6878C9.92974 13.185 9.99779 12.6955 10.2623 12.2307C10.502 11.8119 10.8641 11.4686 11.4032 11.153C11.7518 10.9482 12.1379 10.7791 12.5845 10.6334C12.6555 10.6103 12.7252 10.5898 12.7953 10.5711C12.9507 10.5298 13.1105 10.4977 13.2666 10.4749C13.8506 10.3923 14.3159 10.4638 14.5938 10.5062C15.0781 10.581 15.5545 10.7201 16.0111 10.9247C16.0316 10.9338 16.0544 10.936 16.0753 10.9305C16.0791 10.9295 16.0847 10.928 16.0885 10.927L16.3133 10.8319C16.3592 10.8135 16.3844 10.7611 16.3696 10.7111C16.1173 9.80432 15.8005 8.90642 15.4299 8.0436C15.1238 7.33178 14.7718 6.63011 14.3868 5.95797C14.3718 5.93081 14.345 5.91301 14.3155 5.90839C13.7847 5.83357 13.7466 5.82708 13.7466 5.82708C13.3409 5.77506 12.9986 5.80582 12.6683 5.8355L12.5952 5.84247C12.1699 5.88077 11.7421 5.95712 11.3213 6.06898L11.3247 6.07431Z"
            fill="#262625"
          />
          <path
            d="M6.80423 7.43558L3.49944 7.43097C3.47958 7.43095 3.46187 7.4447 3.45606 7.46415C2.61112 10.2939 2.79677 11.7304 5.2437 13.7575C5.25394 13.766 5.26799 13.7697 5.28094 13.7672C8.19421 13.2141 9.04206 12.0444 9.77992 9.15724C9.78514 9.13682 9.77629 9.11486 9.75825 9.10463L6.82607 7.44138C6.81939 7.43759 6.81187 7.43559 6.80423 7.43558Z"
            fill="#F588B9"
          />
          <path
            d="M7.74044 9.03733L6.12466 8.75481L4.98723 10.5198L5.80624 10.663L4.96798 12.1436L7.25072 10.3264L6.22418 10.1469L7.74044 9.03733Z"
            fill="#262625"
          />
        </svg>
      </RadixSwitch.Thumb>
    </RadixSwitch.Root>
  );
}