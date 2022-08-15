import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./block-title";
import AccordionCard from "./cards/accordion-card";
import blockTitleCircle from "../assets/images/round-circle-1-7.png";

const ACCORDION_DATA = [
  {
    status: true,
    content:
      "Mencegah selalu lebih baik daripada mengatasi. Ini berlaku bukan hanya di dunia kedokteran, tapi juga kejiwaan Berbeda dengan luka medis yang terkadang bisa sembuh dengan sendirinya, luka psikologis itu sangat amat sulit hilang dengan sendirinya, dan kemungkinan besar akan berdampak negatif ke seluruh aspek hidupmu (termasuk finansial) apabila dibiarkan begitu saja..",
    title: "Saya tau saya butuh konseling, tapi rasanya berat banget. Apakah boleh ditunggu dulu sampai benar2 tidak tahan baru konseling ?"
  },
  {
    status: false,
    content:
      "Apakah kamu merasa bahwa hidupmu terganggu? Aktivitas keseharianmu terhambat? Apabila iya, maka alangkah baiknya untukmu melakukan check up psikologis dengan psikolog profesional.",
    title: "Saya sebetulnya tidak tau saya butuh atau tidak untuk konseling. Bagaimana ya ?"
  },
  {
    status: false,
    content:
      "Sangat boleh tentunya. Meskipun ini tergantung dari style dan pendekatan masing2 psikolog, biasanya konseling dimulai dengan proses perkenalan satu sama lain. Fokusnya disini adalah untuk membuatmu nyaman dan berani untuk terbuka tentang masalahmu. Lalu, masuk ke proses cerita atau katarsis emosi dengan kamu menceritakan hal yang mengganggu kamu belakangan ini. Disini psikolog akan betul2 mendengarkan dan berempati dengan situasimu. Lalu, biasanya sesi akan ditutup dengan pemetaan masalah dan perumusan solusi untuk masalahmu. Hal ini tentunya tergantung dengan kompleksitas masalahmu, kalau ringan maka bisa diberikan solusi cepat dari psikolog yang berupa insight atau action plan, tapi apabila masalahmu bukan tipe yang bisa diselesaikan dalam sekali ketemu, psikolog akan memberimu rancangan program psikoterapi yang dipercaya bisa betul2 memberikan solusi yang komprehensif untuk masalah yang kamu alami.",
    title: "Ini pertama kalinya saya konseling. Boleh tolong dijelaskan konseling itu seperti apa ?"
  },
  {
    status: false,
    content:
      "Pertanyaan bagus. Hal ini sangat bergantung dengan bentuk permasalahanmu. Akan tetapi, satu hal yang bisa kamu nantikan adalah: Pemetaan masalah yang jelas. Seringkali orang salah kira dengan menyangka mereka akan dapat solusi atas permasalahan mereka hanya dalam sekali konseling. Hal itu mustahil, karena masalahnya pun dibentuk lama dan kadamg bertahun2, oleh karena itu penyelesaiannya pun tidak bisa dilkakukan dalam 1 jam. Tapi yang bisa kami janjikam adalah, kamu akan mendapat gambaran pemetaan masalah yang jelas kenapa kqmu bisa mengalami masalah yang sekarang. Seringkali itu adalah lqngkah pertama menuju penyem uhan. Peta itu, bila disertai dengan kegiatan assessment dan program psikoterapi, akan menjadi jalan yang jelas dan meyakinkan untukmu bisa menyelesaikan masalah psikologis yang kamu punya — dan bertumbuh menjadi pribadi yang lebih mandiri, berdaya, dan sehat.",
    title: "Apa saja yang akan saya dapat setelah saya konseling ?"
  }
];

const FAQ = () => {
  return (
    <section className="faq-style-one" id="faq">
      <Container>
        <BlockTitle
          textAlign="center"
          image={blockTitleCircle}
          title={`Want to ask something \n from us?`}
        />
        <div className="accrodion-grp faq-accrodion">
          {ACCORDION_DATA.map(({ status, title, content }, index) => (
            <AccordionCard
              key={`accordion-card-${index}`}
              status={status}
              title={title}
              content={content}
            />
          ))}

        </div>
      
      </Container>
    </section>
  );
};

export default FAQ;
