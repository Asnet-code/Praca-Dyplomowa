// app/polityka-prywatnosci/page.tsx
const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto p-4 prose max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Polityka Prywatności</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Postanowienia ogólne</h2>
        <p>
          Niniejsza polityka prywatności dotyczy sklepu internetowego Asnet z
          siedzibą w Rynek 29 Złotoryja, prowadzonego przez Adama Skórke. Dbamy
          o ochronę Twoich danych osobowych i zgodność z RODO.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Gromadzone dane</h2>
        <p>W ramach świadczonych usług przetwarzamy następujące dane:</p>
        <ul className="list-disc pl-6">
          <li>Dane konta: imię, adres e-mail, zaszyfrowane hasło</li>
          <li>Dane transakcyjne: historia zamówień, adres dostawy</li>
          <li>
            Dane płatności: przetwarzane wyłącznie przez Stripe (numer karty,
            dane billingowe)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. Cel przetwarzania danych
        </h2>
        <p>Dane są wykorzystywane do:</p>
        <ul className="list-disc pl-6">
          <li>Realizacji zamówień i dostaw</li>
          <li>Przetwarzania płatności przez Stripe</li>
          <li>Komunikacji w sprawie zamówień</li>
          <li>Zapewnienia bezpieczeństwa usług</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Płatności przez Stripe
        </h2>
        <p>
          Wszystkie płatności są przetwarzane przez Stripe, Inc. Przekazujemy
          Stripe jedynie niezbędne informacje do realizacji płatności. Zapoznaj
          się z{" "}
          <a
            href="https://stripe.com/privacy"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            polityką prywatności Stripe
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Bezpieczeństwo danych
        </h2>
        <p>Stosujemy następujące środki ochrony:</p>
        <ul className="list-disc pl-6">
          <li>Szyfrowanie SSL wszystkich transmisji</li>
          <li>Hasła przechowywane w formie zaszyfrowanej</li>
          <li>Regularne audyty bezpieczeństwa</li>
          <li>Dostęp do danych wyłącznie dla upoważnionych pracowników</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Twoje prawa</h2>
        <p>Masz prawo do:</p>
        <ul className="list-disc pl-6">
          <li>Dostępu do swoich danych</li>
          <li>Sprostowania danych</li>
          <li>Usunięcia danych (z wyjątkiem danych wymaganych prawnie)</li>
          <li>Wniesienia sprzeciwu wobec przetwarzania</li>
          <li>Przenoszenia danych</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Kontakt</h2>
        <p>
          W sprawach ochrony danych osobowych kontaktuj się z naszym Inspektorem
          Ochrony Danych:
          <br />
          Email: asnet@pro.onet.pl
          <br />
          Telefon: 797 822 000
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Zmiany w polityce</h2>
        <p>
          Polityka może być aktualizowana. O istotnych zmianach poinformujemy
          przez e-mail lub komunikat w sklepie.
        </p>
      </section>

      <p className="text-sm text-gray-600 mt-8">
        Ostatnia aktualizacja: 06.02.2025
        <br />
        Dokument obowiązuje od: 06.02.2025
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
