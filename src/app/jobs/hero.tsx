"use client";

import SearchBar from "@/components/search-bar";
import TopNav, { TopNavItem } from "@/components/top-nav";

const topNavItems: TopNavItem[] = [
  { text: "Cari Pekerjaan", href: "/jobs" },
  { text: "Jelajahi Perusahaan", href: "/companies" },
];

export default function Hero() {
  return (
    <>
      <TopNav items={topNavItems} className="bg-white sticky top-0 z-40" />
      <section className="relative w-full flex flex-col justify-center items-center px-32 py-16 bg-neutral-1 overflow-hidden">
        <svg
          width="500"
          height="514"
          viewBox="0 0 500 514"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 z-0"
        >
          <path
            opacity="0.7"
            d="M421.001 469.244L936.763 215.214L936.763 525.252L421.225 777.484L421.001 469.244Z"
            fill="#F8F8FD"
            stroke="#CCCCF5"
            strokeWidth="4"
          />
          <path
            d="M428.972 -3.61728L998.008 -283.758L1120.48 -32.6564L429.229 304.488L428.972 -3.61728Z"
            fill="#F8F8FD"
            stroke="#CCCCF5"
            strokeWidth="4"
          />
          <path
            d="M271.005 199.244L786.767 -54.7855L786.767 295.252L271.229 547.484L271.005 199.244Z"
            fill="#F8F8FD"
            stroke="#CCCCF5"
            strokeWidth="4"
          />
          <path
            d="M2.00481 566.244L517.767 312.214L517.767 622.252L2.22902 874.484L2.00481 566.244Z"
            fill="#F8F8FD"
            stroke="#CCCCF5"
            strokeWidth="4"
          />
        </svg>
        <svg
          width="429"
          height="514"
          viewBox="0 0 429 514"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 z-0"
        >
          <path
            d="M-266.028 54.3827L303.008 -225.758L425.478 25.3436L-265.771 362.488L-266.028 54.3827Z"
            fill="#F8F8FD"
            stroke="#CCCCF5"
            strokeWidth="4"
          />
          <path
            d="M-423.995 191.244L91.7666 -62.7855L91.7666 287.252L-423.771 539.484L-423.995 191.244Z"
            fill="#F8F8FD"
            stroke="#CCCCF5"
            strokeWidth="4"
          />
        </svg>
        <div className="w-full flex flex-col gap-10 justify-center items-center z-10">
          <div className="flex flex-col gap-6 justify-center items-center">
            <div className="flex gap-4 items-start">
              <h2 className="text-neutral-6">Temukan</h2>
              <div className="flex flex-col">
                <h2 className="text-blue">pekerjaan impianmu</h2>
                <svg
                  width="466"
                  height="14"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g>
                    <path
                      stroke="null"
                      id="svg_1"
                      fill="#26A4FF"
                      d="m10.41544,6.83831c3.64068,0 7.45472,-0.05958 11.09542,-0.11915c1.56035,0 2.94725,-0.05958 4.50741,-0.05958c6.58795,-0.11915 13.1759,-0.2383 19.76366,-0.35744c7.97485,-0.11915 15.77643,-0.29788 23.75108,-0.41702c11.26882,-0.2383 22.53764,-0.41703 33.80627,-0.65533c2.60053,-0.05957 5.20105,-0.05957 7.80158,-0.11915c6.58776,-0.11914 13.17571,-0.23829 19.76366,-0.29787c6.58795,-0.11915 13.17571,-0.2383 19.76366,-0.29787c2.60053,-0.05958 5.20105,-0.11915 7.80139,-0.11915c10.40191,-0.11915 20.97729,-0.2383 31.3792,-0.35745c6.4143,-0.05957 12.82975,-0.11914 19.41693,-0.23829c2.60091,0 5.02817,-0.05958 7.62716,-0.05958c10.05635,-0.05958 20.28442,-0.11915 30.34077,-0.17872c10.05442,-0.05958 19.93711,-0.11915 29.99153,-0.17873c2.60091,0 5.1999,0 7.97446,0c6.58718,0 13.00263,0 19.58981,0c10.23,0 20.28442,0 30.51249,-0.05957c3.29359,0 6.58911,0 9.8827,0c6.93448,0 13.86896,0 20.80344,0c0.52095,0 1.21363,0 1.73458,0c-15.60355,0.05957 -31.38074,0.11915 -46.98236,0.2383c-6.58911,0.05957 -13.00263,0.05957 -19.59174,0.11914c-2.77263,0 -5.72085,0 -8.49348,0.05958c-9.53539,0.05957 -18.89714,0.17872 -28.43253,0.2383c-10.92268,0.11915 -21.84342,0.17872 -32.7661,0.29787c-1.90631,0 -3.64089,0.05957 -5.5472,0.05957c-5.8945,0.11915 -11.61535,0.17873 -17.50985,0.29788c-11.789,0.17872 -23.5782,0.35744 -35.36701,0.53617c-1.73362,0 -3.46743,0.05958 -5.20105,0.11915c-5.72104,0.11915 -11.61535,0.29787 -17.33659,0.41702c-10.40191,0.2383 -20.63037,0.47659 -31.03228,0.71489c-2.77399,0.05958 -5.72104,0.17873 -8.49503,0.2383c-6.58776,0.17873 -13.17571,0.35745 -19.76366,0.59575c-8.32157,0.2383 -16.81641,0.4766 -25.13798,0.71489c-11.61554,0.35745 -23.40436,0.7149 -35.0199,1.07234c-2.77379,0.05958 -5.54758,0.17873 -8.49484,0.2383c-5.02761,0.17873 -10.05521,0.35745 -15.0828,0.53617c-0.52011,0 -1.04019,0.11915 -1.04019,0.35745c0,0.17872 0.52009,0.35745 1.04019,0.35745c1.90702,0 3.64068,0.05957 5.5477,0.05957c-0.17338,0.17872 -0.34674,0.35745 -0.34674,0.5362c0,0.6553 1.5603,1.251 3.64068,1.251c14.38928,-0.2978 28.60535,-0.6553 42.99469,-0.8936c12.48226,-0.1787 24.96452,-0.417 37.44697,-0.59573c13.69589,-0.23829 27.56504,-0.47659 41.26093,-0.65531c4.33415,-0.05958 8.66829,-0.11916 13.00244,-0.2383c1.21363,0 2.42707,-0.05958 3.81396,-0.05958c22.19092,-0.17872 44.38241,-0.41702 66.57314,-0.59574c11.789,-0.11915 23.74973,-0.2383 35.53873,-0.29788c4.3355,-0.05957 8.49541,-0.05957 12.82898,-0.11914c22.71168,-0.11915 45.42143,-0.2383 68.13311,-0.35745c9.70904,-0.05957 19.41616,-0.11915 29.12521,-0.17873c8.32176,-0.05957 16.64353,-0.05957 24.96529,-0.17872c6.93448,-0.05958 13.69531,-0.17872 20.62979,-0.2383c3.46724,-0.05957 6.93448,-0.05957 10.22807,-0.11915c7.80274,-0.17872 15.60355,-0.35745 23.40436,-0.53617c-0.51902,0.2383 -0.51902,0.59575 -0.34537,0.83405c0.17365,0.29787 0.69268,0.53617 1.559,0.65531c0.69461,0.11915 1.73458,0.23831 2.42726,0.11916c1.73458,-0.2383 3.46724,-0.4766 5.02817,-0.7149c0,0 0,0 -0.17365,0c0.17365,0 0.17365,-0.05957 0.3473,-0.05957c0.17365,0 0.3473,-0.05958 0.3473,-0.05958l-0.17365,0c0.86633,-0.11915 1.73266,-0.23829 2.77263,-0.41702c0.86826,-0.11915 1.90824,-0.29787 2.77456,-0.41702c1.03998,-0.17873 1.90631,-0.35745 2.94629,-0.53617c1.04191,-0.17873 1.73458,-0.65532 1.73458,-1.07234c0,-0.2383 -0.17365,-0.41702 -0.52095,-0.65532c-0.34537,-0.2383 -1.21363,-0.53617 -2.07996,-0.59575c-0.86633,-0.05957 -1.73266,-0.11915 -2.60091,-0.11915c-0.17172,0 -0.34537,0 -0.51902,0c-0.52095,0 -1.21363,0 -1.73458,0.05957c-1.38535,0.05958 -2.59898,0.11916 -3.98627,0.11916c-1.03998,0 -2.07996,0.05957 -3.29359,0.05957c-2.94822,0.05957 -5.72278,0.11915 -8.66907,0.2383c-0.69268,0 -1.56093,0.05957 -2.25361,0.05957c0.3473,-0.11915 0.51902,-0.2383 0.51902,-0.35744c0.17365,-0.11915 0.17365,-0.2383 0.17365,-0.35745c0,-0.05958 0,-0.17873 0.17365,-0.2383c0,-0.11915 0,-0.2383 -0.17365,-0.29787c0,0 0.17365,0 0.17365,-0.05958c0.52095,-0.11915 1.03998,-0.2383 1.38728,-0.47659c0.3473,-0.17873 0.52095,-0.41703 0.52095,-0.65532c0,-0.2383 -0.17365,-0.41702 -0.52095,-0.65532c-0.17365,-0.05958 -0.3473,-0.17873 -0.52095,-0.2383c-0.51902,-0.17872 -1.03998,-0.2383 -1.559,-0.29787c-1.03998,-0.11915 -2.25361,-0.17873 -3.46724,-0.17873c-1.03998,0 -1.90824,0 -2.94822,0c-1.38728,0 -2.77263,0 -4.15992,0c-1.90824,0 -3.98819,0 -5.8945,0c-5.20183,0 -10.40172,0 -15.60355,0c-4.85452,0 -9.88077,0 -14.73529,0c-4.50722,0 -8.84272,0 -13.34994,0c-17.85716,0 -35.53873,0.05958 -53.39589,0.11915c-13.34994,0.05958 -26.69794,0.11915 -40.04788,0.11915c-5.8945,0 -11.96265,0.05957 -17.85716,0.11915c-13.34801,0.11914 -26.69794,0.17872 -40.04595,0.29787c-3.81454,0 -7.62909,0.05958 -11.44363,0.05958c-2.25361,0 -4.33357,0.05957 -6.58718,0.05957c-13.17629,0.17873 -26.35161,0.35745 -39.52731,0.53617c-3.98742,0.05958 -7.97485,0.11915 -12.13573,0.17872c-2.25361,0 -4.50741,0.05958 -6.76122,0.11916c-13.17571,0.23829 -26.17815,0.47659 -39.35405,0.71489c-6.76122,0.11915 -13.52243,0.23829 -20.28365,0.41702c-11.61554,0.2383 -23.23109,0.4766 -34.67318,0.77447c-10.05519,0.2383 -20.11038,0.41702 -30.16557,0.59574c-1.56035,0.05958 -3.12052,0.05958 -4.85433,0.11915c-2.60033,0.05958 -5.20088,0.05958 -7.80135,0.11915c-2.25376,0.05958 -4.50751,0.05958 -6.93464,0.05958c-0.17336,-0.17873 -0.86683,-0.35745 -1.38692,-0.35745c-1.5603,0.05958 -2.94721,0.11915 -4.50751,0.17872c-0.69347,0 -1.38692,0.11915 -1.5603,0.41703c-0.17336,0.29787 0.34674,0.59574 1.04021,0.65532c0.69345,0.05957 1.21355,0.11915 1.90702,0.17872c0.69345,0.05958 1.21355,0.05957 1.90702,0.05957c1.73364,0.2383 3.29394,0.2383 5.0276,0.29788zm405.6749,-1.96596c2.07996,0 4.3355,0 6.41546,0c0.17365,0.17872 0.51902,0.29787 0.86633,0.41702c-0.86633,0 -1.73458,0.05957 -2.42726,0.05957c-1.56093,0 -3.11994,0.05958 -4.68087,0.05958c-6.93448,0.05957 -13.69531,0.17872 -20.62979,0.2383c-3.12187,0.05957 -6.2418,0.11914 -9.36174,0.11914c-4.85452,0 -9.8827,0.05958 -14.73722,0.05958c-11.26805,0.05957 -22.36438,0.11915 -33.63242,0.17872c-21.84342,0.11915 -43.51512,0.2383 -65.35854,0.35745c-15.60355,0.05957 -31.20516,0.2383 -46.80871,0.41702c-23.40436,0.2383 -46.98217,0.41702 -70.38652,0.65532c-4.68087,0.05958 -9.36174,0.11915 -14.04261,0.2383c-13.34916,0.2383 -26.69833,0.41702 -40.04749,0.65532c-13.00244,0.2383 -26.17815,0.41702 -39.18059,0.65532c-1.21363,0 -2.42707,0.05957 -3.6407,0.05957c3.46743,-0.11915 7.10794,-0.17872 10.57537,-0.29787c12.30899,-0.29787 24.61779,-0.65532 36.92679,-0.95319c4.33415,-0.11915 8.66829,-0.2383 12.82918,-0.35745c2.25361,-0.05957 4.50741,-0.11915 6.58776,-0.11915c12.82918,-0.2383 25.65816,-0.53617 38.48714,-0.77447c2.42726,-0.05957 5.0276,-0.11915 7.45486,-0.17872c3.64051,-0.05958 7.2812,-0.11915 10.74864,-0.11915c13.17571,-0.17872 26.35199,-0.35745 39.52635,-0.53617c2.94822,-0.05957 5.8945,-0.05957 8.66907,-0.11915c0.69268,0 1.56093,0 2.25361,0c2.07996,0 4.16185,0 6.06815,-0.05958c13.17629,-0.11914 26.52429,-0.17872 39.70058,-0.29787c6.06815,-0.05957 12.13631,-0.11915 18.20253,-0.11915c19.59174,-0.05957 39.3552,-0.11915 58.94502,-0.17872c20.62979,0 40.74056,0 60.67767,-0.05957z"
                    />
                    <path
                      id="svg_2"
                      fill="#26A4FF"
                      d="m19.2061,14c0.2977,0 0.5391,-0.16 0.5391,-0.3574c0,-0.1974 -0.2414,-0.3574 -0.5391,-0.3574c-0.2977,0 -0.5391,0.16 -0.5391,0.3574c0,0.1974 0.2414,0.3574 0.5391,0.3574z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <p className="text-lg text-neutral-5">
              Temukan Karier Impian Anda di Perusahaan Ternama
            </p>
          </div>
          <SearchBar
            className="w-full shadow-lg"
            inputPlaceholder="Masukkan kata kunci seperti posisi pekerjaan"
            buttonText="Cari"
          />
        </div>
      </section>
    </>
  );
}
