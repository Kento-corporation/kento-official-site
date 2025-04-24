
export default function KentoLandingPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-cover bg-center"
        style={{
          backgroundImage: "url('/20240402_070302335_iOS.jpg')",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl text-white">
          誠実さと品質を世界へ
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">
          KENTO – 健康の未来を支える
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-4">会社紹介</h2>
        <p className="mb-4">
          株式会社健人（KENTO Corporation）は、健康補助食品と伝統医薬原料を専門に取り扱う企業です。
          黒にんにくや牛黄など、品質にこだわった製品を世界に届けています。
        </p>
        <p>
          私たちは「人の健康に貢献すること」を偉大な作業として、誠実な仕事を通じて国内外の信頼あるパートナーと共に価値を創造しています。
          自然の力と科学の均衡をこわさず、人々のくらしを支える製品をお届けします。
        </p>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">主な事業</h2>
          <ul className="list-disc pl-6">
            <li>有機黒にんにくの製造・販売</li>
            <li>牛黄の輸入・質検・販売</li>
            <li>健康食品原料のコンサルティング</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">社会貢献</h2>
          <p>株式会社健人は、一般社団法人PEARLSの正式スポンサーとして、女子ラグビーチームの発展を支援しています。スポーツを通じた地域社会の活性化と、少女たちへの夢と期待を届けることを目指しています。</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">会社情報</h2>
          <p>所在地：〒509-9132 岐阜県中津川市茄子川111-237</p>
          <p>代表者：松岡 武男</p>
          <p>メール：matsuoka@kento-corporation.jp</p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
          <p>ご興味をお持ちの方は、お気軽にメールにてご連絡ください。</p>
          <p className="mt-2 font-medium">matsuoka@kento-corporation.jp</p>
        </div>
      </section>
    </div>
  );
}
