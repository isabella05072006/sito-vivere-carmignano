export default function AssociazioneWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      

      {/* Hero */}
      {/* HERO */}

<section id="home">

{/* BARRA SOPRA */}
<header className="
absolute
top-0
left-0
w-full
z-50
px-16
py-8
flex
justify-between
items-center
">

<img
src="/images/logo.png"
alt="Logo"
className="absolute
top-[-5px]
left-[20px]
w-[250px]
z-50
"

/>

<nav className="absolute
top-[-0,4px]
right-[300px]
w-[250px]
z-50 flex gap-8 text-white text-xl whitespace-nowrap">

<a href="#home">Home</a>

<a href="#chi-siamo">
Chi siamo
</a>

<a href="#progetti">
Progetti
</a>

<a href="#eventi">
Eventi
</a>

<a href="#contatti">
Contatti
</a>

</nav>

</header>




{/* IMMAGINE GRANDE */}

<div className="relative h-[90vh]">

  


  {/* FOTO */}
  <img
    src="https://www.sposarsiacarmignano.it/wp-content/uploads/2021/10/Campano-8-2.jpg"
    alt="Carmignano"
    className="
      w-full
      h-full
      object-cover
    "
  />

</div>



{/* BLOCCO BEIGE */}

<div
className="
bg-[#E2D2B8]
px-24
py-28
"
>

<h1
className="
-mt-10
text-[90px]
leading-[0.92]
font-bold
text-[#C89A2B]
"
>

Iniziamo a
<br />

"VIVERE
<br />

CARMIGNANO"

</h1>



<p
className="
mt-10
max-w-[1100px]
text-[32px]
leading-relaxed
text-white
"
>

Carmignano è fatta di luoghi,
tradizioni e persone.

Proprio dalle persone nasce
Vivere Carmignano:
un'associazione creata
per promuovere partecipazione,
collaborazione e iniziative.

</p>

</div>

</section>

      {/* Chi siamo */}
      <section id="chi-siamo" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Chi siamo</h3>

          <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Siamo dei ragazzi impegnati nel supporto
            della comunità locale. Crediamo nell'unicità del nostro territorio e ci impegniamo per preservarlo; Organizziamo attività sociali, raccolte
            fondi, eventi di sensibilizzazione. L'obiettivo? Fare la differenza.
          </p>
        </div>
      </section>

      {/* Progetti */}
      <section id="progetti" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">I nostri obiettivi</h3>
            <p className="text-gray-600 text-lg">
              Alcune delle iniziative attive sul territorio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sensibilizzazione',
                text: 'Lavorare per far riflettere le persone in quelli che sono gli aspetti più importanti di una società.',
              },
              {
                title: 'Impegnare la comunità locale',
                text: 'Dare un modo ai cittadini di poter contribuirere al benessere collettivo.',
              },
              {
                title: 'Migliorare il nostro territorio',
                text: 'Istituire delle raccolte fondi destinate al cuore del pause: la nostra festa di San MIchele.',
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
                Un'occasione per contribuire concretamente al territorio, conoscere nuove persone e dare inizio ad un percorso di partecipazione attiva.
              </p>
            </div>

            <div className="border rounded-3xl p-8 bg-gray-50">
              <p className="text-green-700 font-semibold mb-2">28 Giugno 2026</p>
              <h4 className="text-2xl font-bold mb-3">Banchetto sociale</h4>
              <p className="text-gray-600 leading-7">
                L'iniziativa è aperta a chiunque voglia partecipare, anche semplicemente per curiosità o per conoscere il progetto dell'associazione.
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
                  <strong>Email:</strong> viverecarmignano@gmail.com
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
                rows={5}
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

