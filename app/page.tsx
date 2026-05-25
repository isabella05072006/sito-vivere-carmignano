export default function AssociazioneWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-[#EFE6D6]  shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#C89A2B]">
            VIVERE CARMIGNANO
          </h1>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-green-700">Home</a>
            <a href="#chi-siamo" className="hover:text-green-700">Chi siamo</a>
            <a href="#progetti" className="hover:text-green-700">Progetti</a>
            <a href="#eventi" className="hover:text-green-700">Eventi</a>
            <a href="#contatti" className="hover:text-green-700">Contatti</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="bg-gradient-to-br from-[#E2D2B8] to-[#F3EBDD] text-[#C89A2B]"
      ><img
  src="/images/logo.png"
  alt="Logo Vivere Carmignano"
  className="w-[500px] object-contain"
/>
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight mb-8">
              Iniziamo a "VIVERE CARMIGNANO"
            </h2>

            <p className="text-lg mb-8 text-black">
              Carmignano è fatta di luoghi, tradizioni e persone. Proprio dalle persone nasce Vivere Carmignano: un'associazione creata con l'obiettivo di promuovere partecipazione, collaborazione e iniziative a favore della comunità.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#C89A2B] px-6 py-3 rounded-2xl font-semibold shadow hover:scale-105 transition">
                Dona ora
              </button>

              <button className="bg-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-green-700 transition">
                Diventa volontario
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://media.gettyimages.com/id/2225799512/it/foto/tuscany-the-castle-of-carmignano.jpg?s=612x612&w=0&k=20&c=R1Y8gkA-SOzBzylE6n78iIHMVUHr7eTuCtyzLgbnL9Y="
              alt="Volontari"
              className="rounded-3xl shadow-2xl w-full object-cover h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Chi siamo */}
      <section id="chi-siamo" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Chi siamo</h3>

          <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Siamo un'associazione senza scopo di lucro impegnata nel supporto
            della comunità locale. Organizziamo attività sociali, raccolte
            fondi, eventi educativi e iniziative per aiutare chi si trova in
            difficoltà.
          </p>
        </div>
      </section>

      {/* Progetti */}
      <section id="progetti" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">I nostri progetti</h3>
            <p className="text-gray-600 text-lg">
              Alcune delle iniziative attive sul territorio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Supporto alimentare',
                text: 'Distribuzione di beni di prima necessità per famiglie in difficoltà.',
              },
              {
                title: 'Doposcuola solidale',
                text: 'Attività educative gratuite per bambini e ragazzi.',
              },
              {
                title: 'Eventi di comunità',
                text: 'Incontri, laboratori e iniziative per creare inclusione sociale.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition"
              >
                <h4 className="text-2xl font-semibold mb-4 text-green-700">
                  {item.title}
                </h4>

                <p className="text-gray-600 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventi */}
      <section id="eventi" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Prossimi eventi</h3>
            <p className="text-gray-600 text-lg">
              Partecipa alle nostre attività.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-3xl p-8 bg-gray-50">
              <p className="text-green-700 font-semibold mb-2">28 Giugno 2026, Ritrovo ore 18:00</p>
              <h4 className="text-2xl font-bold mb-3">Pulizia delle strade</h4>
              <p className="text-gray-600 leading-7">
                Un'occasione per contribuire concretamente al territorio, conoscere nuove persone e dare inizio a un percorso di partecipazione attiva.
              </p>
            </div>

            <div className="border rounded-3xl p-8 bg-gray-50">
              <p className="text-green-700 font-semibold mb-2">28 Giugno 2026</p>
              <h4 className="text-2xl font-bold mb-3">Banchetto sociale</h4>
              <p className="text-gray-600 leading-7">
                L'iniziativa è aperta a chiunque voglia partecipare, anche semplicemente per curiosita o per conoscere il progetto dell'associazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">
            Aiutaci a sostenere i nostri progetti
          </h3>

          <p className="text-lg text-green-100 mb-8 leading-8">
            Ogni contributo può fare la differenza per chi ha bisogno.
          </p>

          <button className="bg-white text-green-700 px-8 py-4 rounded-2xl font-bold shadow hover:scale-105 transition">
            Fai una donazione
          </button>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Contatti</h3>
            <p className="text-gray-600 text-lg">
              Scrivici per collaborazioni, volontariato o informazioni.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Informazioni</h4>

              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Email:</strong> viverecarmigano@gmail.com
                </p>

                <p>
                  <strong>Telefono:</strong> +39 3889990822
                </p>

                <p>
                  <strong>Indirizzo:</strong> Carmignano, PO
                </p>
              </div>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Nome"
                className="w-full border rounded-2xl px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-2xl px-4 py-3"
              />

              <textarea
                placeholder="Messaggio"
                rows="5"
                className="w-full border rounded-2xl px-4 py-3"
              ></textarea>

              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-800 transition"
              >
                Invia messaggio
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">
              Associazione Solidale
            </h4>
            <p className="text-sm text-gray-400">
              Costruiamo insieme una comunità più inclusiva.
            </p>
          </div>

          <div className="text-sm text-gray-400">
            © 2026 Associazione Solidale — Tutti i diritti riservati
          </div>
        </div>
      </footer>
    </div>
  );
}

