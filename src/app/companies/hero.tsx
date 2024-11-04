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
                <h2 className="text-blue">perusahaan impianmu</h2>
                <svg
                  width="510"
                  height="13.999999999999998"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g>
                    <path
                      stroke="null"
                      d="m11.35696,6.83831c3.98638,0 8.16258,-0.05958 12.14898,-0.11915c1.70851,0 3.2271,-0.05958 4.93541,-0.05958c7.21351,-0.11915 14.42701,-0.2383 21.64031,-0.35744c8.7321,-0.11915 17.27447,-0.29788 26.00635,-0.41702c12.33884,-0.2383 24.67769,-0.41703 37.01633,-0.65533c2.84746,-0.05957 5.69491,-0.05957 8.54237,-0.11915c7.2133,-0.11914 14.4268,-0.23829 21.64031,-0.29787c7.21351,-0.11915 14.4268,-0.2383 21.64031,-0.29787c2.84746,-0.05958 5.69491,-0.11915 8.54217,-0.11915c11.38962,-0.11915 22.96918,-0.2383 34.3588,-0.35745c7.02337,-0.05957 14.04799,-0.11914 21.26065,-0.23829c2.84788,0 5.50562,-0.05958 8.35139,-0.05958c11.01125,-0.05958 22.21052,-0.11915 33.22176,-0.17872c11.00913,-0.05958 21.83023,-0.11915 32.83936,-0.17873c2.84788,0 5.69365,0 8.73167,0c7.21266,0 14.23729,0 21.44995,0c11.20138,0 22.21052,0 33.40979,-0.05957c3.60633,0 7.21478,0 10.82111,0c7.59294,0 15.18588,0 22.77882,0c0.57042,0 1.32887,0 1.89929,0c-17.08518,0.05957 -34.36048,0.11915 -51.44355,0.2383c-7.21478,0.05957 -14.23729,0.05957 -21.45206,0.11914c-3.0359,0 -6.26407,0 -9.29997,0.05958c-10.44082,0.05957 -20.69151,0.17872 -31.13233,0.2383c-11.95984,0.11915 -23.91755,0.17872 -35.87739,0.29787c-2.08732,0 -3.98661,0.05957 -6.07393,0.05957c-6.45421,0.11915 -12.71828,0.17873 -19.17249,0.29788c-12.90842,0.17872 -25.81706,0.35744 -38.72527,0.53617c-1.89823,0 -3.79668,0.05958 -5.69491,0.11915c-6.26428,0.11915 -12.71828,0.29787 -18.98278,0.41702c-11.38962,0.2383 -22.58932,0.47659 -33.97893,0.71489c-3.03739,0.05958 -6.26428,0.17873 -9.30167,0.2383c-7.2133,0.17873 -14.4268,0.35745 -21.64031,0.59575c-9.11174,0.2383 -18.4132,0.4766 -27.52494,0.71489c-12.71849,0.35745 -25.62671,0.7149 -38.3452,1.07234c-3.03717,0.05958 -6.07435,0.17873 -9.30146,0.2383c-5.505,0.17873 -11.01,0.35745 -16.51498,0.53617c-0.5695,0 -1.13896,0.11915 -1.13896,0.35745c0,0.17872 0.56947,0.35745 1.13896,0.35745c2.0881,0 3.98638,0.05957 6.07448,0.05957c-0.18984,0.17872 -0.37966,0.35745 -0.37966,0.5362c0,0.6553 1.70846,1.251 3.98638,1.251c15.75561,-0.2978 31.32156,-0.6553 47.07723,-0.8936c13.66751,-0.1787 27.33501,-0.417 41.00273,-0.59573c14.99638,-0.23829 30.18246,-0.47659 45.17884,-0.65531c4.7457,-0.05958 9.49138,-0.11916 14.23708,-0.2383c1.32887,0 2.65753,-0.05958 4.17611,-0.05958c24.29805,-0.17872 48.59672,-0.41702 72.89456,-0.59574c12.90842,-0.11915 26.00487,-0.2383 38.91329,-0.29788c4.74718,-0.05957 9.30209,-0.05957 14.04715,-0.11914c24.86826,-0.11915 49.7344,-0.2383 74.60265,-0.35745c10.63096,-0.05957 21.25981,-0.11915 31.89078,-0.17873c9.11195,-0.05957 18.22391,-0.05957 27.33586,-0.17872c7.59294,-0.05958 14.99574,-0.17872 22.58868,-0.2383c3.79647,-0.05957 7.59294,-0.05957 11.19927,-0.11915c8.54365,-0.17872 17.08518,-0.35745 25.62671,-0.53617c-0.5683,0.2383 -0.5683,0.59575 -0.37816,0.83405c0.19014,0.29787 0.75845,0.53617 1.70703,0.65531c0.76057,0.11915 1.89929,0.23831 2.65774,0.11916c1.89929,-0.2383 3.79647,-0.4766 5.50562,-0.7149c0,0 0,0 -0.19014,0c0.19014,0 0.19014,-0.05957 0.38028,-0.05957c0.19014,0 0.38028,-0.05958 0.38028,-0.05958l-0.19014,0c0.94859,-0.11915 1.89718,-0.23829 3.0359,-0.41702c0.95071,-0.11915 2.08944,-0.29787 3.03802,-0.41702c1.13873,-0.17873 2.08732,-0.35745 3.22605,-0.53617c1.14084,-0.17873 1.89929,-0.65532 1.89929,-1.07234c0,-0.2383 -0.19014,-0.41702 -0.57042,-0.65532c-0.37816,-0.2383 -1.32887,-0.53617 -2.27746,-0.59575c-0.94859,-0.05957 -1.89718,-0.11915 -2.84788,-0.11915c-0.18803,0 -0.37816,0 -0.5683,0c-0.57042,0 -1.32887,0 -1.89929,0.05957c-1.5169,0.05958 -2.84576,0.11916 -4.36478,0.11916c-1.13873,0 -2.27746,0.05957 -3.60633,0.05957c-3.22817,0.05957 -6.26618,0.11915 -9.49224,0.2383c-0.75845,0 -1.70915,0.05957 -2.4676,0.05957c0.38028,-0.11915 0.5683,-0.2383 0.5683,-0.35744c0.19014,-0.11915 0.19014,-0.2383 0.19014,-0.35745c0,-0.05958 0,-0.17873 0.19014,-0.2383c0,-0.11915 0,-0.2383 -0.19014,-0.29787c0,0 0.19014,0 0.19014,-0.05958c0.57042,-0.11915 1.13873,-0.2383 1.51901,-0.47659c0.38028,-0.17873 0.57042,-0.41703 0.57042,-0.65532c0,-0.2383 -0.19014,-0.41702 -0.57042,-0.65532c-0.19014,-0.05958 -0.38028,-0.17873 -0.57042,-0.2383c-0.5683,-0.17872 -1.13873,-0.2383 -1.70703,-0.29787c-1.13873,-0.11915 -2.4676,-0.17873 -3.79647,-0.17873c-1.13873,0 -2.08944,0 -3.22817,0c-1.51901,0 -3.0359,0 -4.55492,0c-2.08944,0 -4.36689,0 -6.45421,0c-5.69577,0 -11.38941,0 -17.08518,0c-5.31548,0 -10.81899,0 -16.13447,0c-4.9352,0 -9.68238,0 -14.61758,0c-19.55278,0 -38.91329,0.05958 -58.46607,0.11915c-14.61758,0.05958 -29.23303,0.11915 -43.85061,0.11915c-6.45421,0 -13.09856,0.05957 -19.55278,0.11915c-14.61546,0.11914 -29.23303,0.17872 -43.84849,0.29787c-4.17675,0 -8.35351,0.05958 -12.53025,0.05958c-2.4676,0 -4.74506,0.05957 -7.21266,0.05957c-14.42744,0.17873 -28.85381,0.35745 -43.28061,0.53617c-4.36604,0.05958 -8.7321,0.11915 -13.28807,0.17872c-2.4676,0 -4.93541,0.05958 -7.40323,0.11916c-14.4268,0.23829 -28.66388,0.47659 -43.09089,0.71489c-7.40323,0.11915 -14.80645,0.23829 -22.20967,0.41702c-12.71849,0.2383 -25.43699,0.4766 -37.96555,0.77447c-11.00998,0.2383 -22.01995,0.41702 -33.02993,0.59574c-1.70851,0.05958 -3.41683,0.05958 -5.31527,0.11915c-2.84724,0.05958 -5.69473,0.05958 -8.54212,0.11915c-2.46776,0.05958 -4.93552,0.05958 -7.59312,0.05958c-0.18982,-0.17873 -0.94914,-0.35745 -1.51861,-0.35745c-1.70846,0.05958 -3.22706,0.11915 -4.93552,0.17872c-0.75932,0 -1.51861,0.11915 -1.70846,0.41703c-0.18982,0.29787 0.37966,0.59574 1.13898,0.65532c0.7593,0.05957 1.32878,0.11915 2.0881,0.17872c0.7593,0.05958 1.32878,0.05957 2.0881,0.05957c1.89826,0.2383 3.60671,0.2383 5.50499,0.29788l0.00004,0zm444.19555,-1.96596c2.27746,0 4.74718,0 7.02464,0c0.19014,0.17872 0.5683,0.29787 0.94859,0.41702c-0.94859,0 -1.89929,0.05957 -2.65774,0.05957c-1.70915,0 -3.41619,0.05958 -5.12534,0.05958c-7.59294,0.05957 -14.99574,0.17872 -22.58868,0.2383c-3.41831,0.05957 -6.83449,0.11914 -10.25068,0.11914c-5.31548,0 -10.82111,0.05958 -16.13659,0.05958c-12.338,0.05957 -24.48798,0.11915 -36.82597,0.17872c-23.91755,0.11915 -47.64708,0.2383 -71.56463,0.35745c-17.08518,0.05957 -34.16823,0.2383 -51.25341,0.41702c-25.62671,0.2383 -51.44334,0.41702 -77.07004,0.65532c-5.12534,0.05958 -10.25068,0.11915 -15.37602,0.2383c-14.61672,0.2383 -29.23346,0.41702 -43.85018,0.65532c-14.23708,0.2383 -28.66388,0.41702 -42.90096,0.65532c-1.32887,0 -2.65753,0.05957 -3.9864,0.05957c3.79668,-0.11915 7.78287,-0.17872 11.57955,-0.29787c13.47778,-0.29787 26.95536,-0.65532 40.43315,-0.95319c4.7457,-0.11915 9.49138,-0.2383 14.04737,-0.35745c2.4676,-0.05957 4.93541,-0.11915 7.2133,-0.11915c14.04737,-0.2383 28.09452,-0.53617 42.14167,-0.77447c2.65774,-0.05957 5.50499,-0.11915 8.16273,-0.17872c3.98619,-0.05958 7.97258,-0.11915 11.76927,-0.11915c14.4268,-0.17872 28.85423,-0.35745 43.27955,-0.53617c3.22817,-0.05957 6.45421,-0.05957 9.49224,-0.11915c0.75845,0 1.70915,0 2.4676,0c2.27746,0 4.55704,0 6.64435,-0.05958c14.42744,-0.11914 29.04289,-0.17872 43.47033,-0.29787c6.64435,-0.05957 13.28871,-0.11915 19.93094,-0.11915c21.45206,-0.05957 43.09215,-0.11915 64.54211,-0.17872c22.58868,0 44.60906,0 66.43929,-0.05957l-0.00005,0z"
                      fill="#26A4FF"
                      id="svg_1"
                    />
                    <path
                      d="m19.2061,14c0.2977,0 0.5391,-0.16 0.5391,-0.3574c0,-0.1974 -0.2414,-0.3574 -0.5391,-0.3574c-0.2977,0 -0.5391,0.16 -0.5391,0.3574c0,0.1974 0.2414,0.3574 0.5391,0.3574z"
                      fill="#26A4FF"
                      id="svg_2"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <p className="text-lg text-neutral-5">
              Jadikan Impian Anda Kenyataan - Temukan Perusahaan Idaman Anda!
            </p>
          </div>
          <SearchBar
            className="w-full shadow-lg"
            inputPlaceholder="Masukkan kata kunci seperti nama perusahaan"
            buttonText="Cari"
          />
        </div>
      </section>
    </>
  );
}
