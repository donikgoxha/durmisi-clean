/* ==========================================================================
   Durmisi&Clean — Internationalisation (DE / EN)
   --------------------------------------------------------------------------
   HOW TO EDIT
   1. Contact details: change the CONTACT object below. It is the ONLY place
      real phone numbers, e-mail and address need to be written. Everything on
      every page updates automatically.
   2. Text: each entry exists twice, once under `de` and once under `en`.
      The German string is also written literally in the HTML so the site is
      correct with JavaScript disabled.
   ========================================================================== */

/* --- 1. CONTACT DETAILS — REPLACE THE PLACEHOLDERS ----------------------- */
const CONTACT = {
  phone:      '[TELEFON]',            // e.g. '079 123 45 67'
  phoneHref:  'tel:[TELEFON]',        // e.g. 'tel:+41791234567'
  email:      '[EMAIL]',              // e.g. 'info@durmisi-clean.ch'
  emailHref:  'mailto:[EMAIL]',
  whatsapp:   '[WHATSAPP]',           // display number
  whatsappHref: 'https://wa.me/[WHATSAPP]',   // digits only, e.g. 41791234567
  street:     '[STRASSE NR]',
  city:       '[PLZ ORT]',
  country:    'Schweiz',
  instagram:  'https://instagram.com/[INSTAGRAM]',
  uid:        '[CHE-XXX.XXX.XXX]',
  register:   '[HANDELSREGISTER]',
  owner:      '[INHABER]'
};

/* --- 2. DICTIONARY ------------------------------------------------------- */
const I18N = {
  de: {
    /* ---- Global ---- */
    'brand.tag': 'Reinigungsservice Schweiz',
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Menü',
    'nav.close': 'Menü schliessen',
    'cta.quote': 'Kostenlose Offerte',
    'cta.quoteLong': 'Jetzt kostenlose Offerte anfordern',
    'cta.call': 'Anrufen',
    'cta.callNow': 'Jetzt anrufen',
    'cta.whatsapp': 'WhatsApp',
    'cta.contact': 'Kontakt aufnehmen',
    'cta.allServices': 'Alle Leistungen ansehen',
    'cta.details': 'Mehr erfahren',
    'lang.switch': 'Sprache wechseln',
    'lang.de': 'Deutsch',
    'lang.en': 'Englisch',

    'topbar.hours': 'Mo–Fr 07:00–18:00 · Sa 08:00–14:00',
    'topbar.free': 'Offerte kostenlos & unverbindlich',

    /* ---- Home: hero ---- */
    'meta.home.title': 'Durmisi&Clean — Professionelle Reinigung in der Schweiz',
    'meta.home.desc': 'Unterhaltsreinigung, Umzugsreinigung mit Abnahmegarantie, Fenster-, Bau-, Büro- und Grundreinigung. Kostenlose Offerte innert 24 Stunden.',
    'hero.chip1': 'Abnahmegarantie',
    'hero.chip2': 'Versichert & angemeldet',
    'hero.chip3': 'Offerte in 24 Stunden',
    'hero.title': 'Wir reinigen, damit Sie <span class="hl-underline">durchatmen</span> können.',
    'hero.sub': 'Professionelle Reinigung für Privathaushalte, Büros und Liegenschaften — gründlich, pünktlich und mit schriftlicher Abnahmegarantie bei jedem Umzug.',
    'hero.trust': 'Über 200 Kundinnen und Kunden vertrauen uns ihre Räume an.',

    'kpi.years': 'Jahre Erfahrung',
    'kpi.objects': 'Gereinigte Objekte',
    'kpi.rating': 'Durchschnittliche Bewertung',
    'kpi.response': 'Antwort auf Anfragen',

    /* ---- Home: services ---- */
    'services.eyebrow': 'Unsere Leistungen',
    'services.title': 'Ein Partner für jede Art von Reinigung',
    'services.sub': 'Vom wöchentlichen Unterhalt bis zur Bauendreinigung — alles aus einer Hand, mit festen Teams und verbindlichen Pauschalpreisen.',

    'svc.unterhalt.name': 'Unterhaltsreinigung',
    'svc.unterhalt.short': 'Regelmässige Reinigung nach festem Plan — täglich, wöchentlich oder nach Absprache. Immer dasselbe Team, immer derselbe Standard.',
    'svc.umzug.name': 'Umzugsreinigung',
    'svc.umzug.badge': 'Mit Abnahmegarantie',
    'svc.umzug.short': 'Wohnungs- und Hausreinigung bei Ein- und Auszug. Wir übergeben direkt an die Verwaltung — und bleiben, bis abgenommen ist.',
    'svc.fenster.name': 'Fensterreinigung',
    'svc.fenster.short': 'Glas, Rahmen, Storen und Rollläden — streifenfrei innen wie aussen, auch in schwer zugänglichen Lagen.',
    'svc.bau.name': 'Baureinigung',
    'svc.bau.short': 'Grob-, Fein- und Bauendreinigung nach Neubau, Umbau oder Renovation. Termingerecht auf den Bezugstermin.',
    'svc.buero.name': 'Büroreinigung',
    'svc.buero.short': 'Diskrete Reinigung von Büros, Praxen und Gewerberäumen — ausserhalb Ihrer Geschäftszeiten, ohne Unterbruch im Betrieb.',
    'svc.grund.name': 'Grundreinigung',
    'svc.grund.short': 'Intensive Tiefenreinigung für Küche, Bad und Böden. Kalk, Fett und Altablagerungen restlos entfernt.',

    /* ---- Home: why ---- */
    'why.eyebrow': 'Warum Durmisi&Clean',
    'why.title': 'Gründe, warum Kundinnen und Kunden bleiben',
    'why.sub': 'Reinigung ist Vertrauenssache. Wir haben unseren Betrieb darauf ausgerichtet, dieses Vertrauen jedes Mal zu bestätigen.',
    'why.1.title': 'Immer dasselbe Team',
    'why.1.text': 'Bei Ihnen arbeitet ein festes, geschultes Team. Sie müssen nichts zweimal erklären, und niemand Fremdes steht unangekündigt vor der Tür.',
    'why.2.title': 'Versichert & korrekt angemeldet',
    'why.2.text': 'Betriebshaftpflichtversicherung, ordentlich angestelltes Personal und vollständige Sozialabgaben. Ohne Wenn und Aber.',
    'why.3.title': 'Verbindliche Pauschalen',
    'why.3.text': 'Sie erhalten den Preis schriftlich, bevor wir beginnen. Keine Stundenaufrechnung, keine Zuschläge, keine Überraschungen auf der Rechnung.',
    'why.4.title': 'Ökologische Reinigungsmittel',
    'why.4.text': 'Biologisch abbaubare Produkte, sicher für Kinder, Haustiere und Allergikerinnen und Allergiker — ohne Kompromiss beim Ergebnis.',

    /* ---- Home: process ---- */
    'process.eyebrow': 'So arbeiten wir',
    'process.title': 'In vier Schritten zur sauberen Übergabe',
    'process.1.title': 'Anfrage',
    'process.1.text': 'Sie melden sich per Telefon, Formular oder WhatsApp. Wir antworten innert 24 Stunden — auch am Wochenende.',
    'process.2.title': 'Besichtigung & Offerte',
    'process.2.text': 'Wir schauen uns das Objekt an, vor Ort oder anhand von Fotos, und senden Ihnen eine verbindliche Pauschale.',
    'process.3.title': 'Reinigung',
    'process.3.text': 'Das Team kommt zum vereinbarten Termin — mit eigenen Maschinen, eigenem Material und einer klaren Checkliste.',
    'process.4.title': 'Abnahme',
    'process.4.text': 'Wir gehen gemeinsam durch. Erst wenn Sie oder die Verwaltung zufrieden sind, gilt der Auftrag als erledigt.',

    /* ---- Home: guarantee ---- */
    'guar.eyebrow': 'Unsere Abnahmegarantie',
    'guar.title': 'Wir bleiben, bis die Abnahme steht.',
    'guar.text': 'Bei jeder Umzugsreinigung gilt: Beanstandet die Verwaltung bei der Übergabe etwas, kommen wir kostenlos zurück und beheben es — innert 48 Stunden. Schriftlich zugesichert, in jeder Offerte.',
    'guar.b1': 'Kostenlose Nachreinigung bei Beanstandung',
    'guar.b2': 'Innert 48 Stunden wieder vor Ort',
    'guar.b3': 'Direkte Übergabe an die Verwaltung',
    'guar.b4': 'Schriftlich in jeder Offerte festgehalten',
    'guar.seal': 'Abnahme oder Nachbesserung',

    /* ---- Home: testimonials ---- */
    'test.eyebrow': 'Kundenstimmen',
    'test.title': 'Was unsere Kundschaft sagt',
    'test.1.quote': 'Wohnungsübergabe nach acht Jahren — ich hatte mit Diskussionen gerechnet. Die Verwaltung hat ohne ein einziges Wort abgenommen. Genau dafür zahlt man.',
    'test.1.name': 'M. Keller',
    'test.1.meta': 'Privatkundin, Umzugsreinigung',
    'test.2.quote': 'Wir lassen seit zwei Jahren unsere Büroräume reinigen. Immer dasselbe Team, immer pünktlich — am Montagmorgen merkt man sofort, dass jemand da war.',
    'test.2.name': 'T. Brunner',
    'test.2.meta': 'Geschäftsführer, Unterhaltsreinigung',
    'test.3.quote': 'Nach dem Umbau sah die Wohnung aus wie eine Baustelle. Zwei Tage später war sie bezugsbereit. Faire Pauschale, keine Nachforderungen.',
    'test.3.name': 'S. Fischer',
    'test.3.meta': 'Bauherrin, Baureinigung',

    /* ---- Home: areas ---- */
    'areas.eyebrow': 'Einsatzgebiet',
    'areas.title': 'Wo wir für Sie im Einsatz sind',
    'areas.sub': 'Wir arbeiten in der ganzen Region. Ist Ihr Ort nicht aufgeführt? Fragen Sie trotzdem an — meistens lässt sich etwas einrichten.',

    /* ---- FAQ ---- */
    'faq.eyebrow': 'Häufige Fragen',
    'faq.title': 'Antworten, bevor Sie fragen müssen',
    'faq.1.q': 'Was kostet eine Umzugsreinigung?',
    'faq.1.a': 'Der Preis richtet sich nach Grösse und Zustand des Objekts sowie danach, ob Fenster, Storen und Balkon dazugehören. Sie erhalten vor dem Start immer eine verbindliche Pauschale — kostenlos und unverbindlich. Richtwerte für Ihre Wohnungsgrösse nennen wir Ihnen gerne direkt am Telefon.',
    'faq.2.q': 'Wie schnell können Sie kommen?',
    'faq.2.a': 'Unterhaltsreinigungen starten wir in der Regel innert einer Woche. Umzugsreinigungen planen wir idealerweise zwei bis drei Wochen im Voraus. Kurzfristige Termine sind auf Anfrage oft möglich — fragen Sie einfach nach.',
    'faq.3.q': 'Bringen Sie Material und Maschinen selbst mit?',
    'faq.3.a': 'Ja, vollständig. Reinigungsmittel, Maschinen und Verbrauchsmaterial sind im Preis enthalten, sofern nichts anderes vereinbart wurde. Sie müssen nichts bereitstellen.',
    'faq.4.q': 'Sind Sie versichert?',
    'faq.4.a': 'Ja. Wir verfügen über eine Betriebshaftpflichtversicherung. Sämtliche Mitarbeitenden sind ordentlich angestellt, unfallversichert und über uns sozialversichert.',
    'faq.5.q': 'Was, wenn ich mit dem Ergebnis nicht zufrieden bin?',
    'faq.5.a': 'Melden Sie sich innert 48 Stunden nach der Reinigung. Wir kommen zurück und reinigen die beanstandeten Stellen kostenlos nach. Bei Umzugsreinigungen gilt zusätzlich unsere Abnahmegarantie.',
    'faq.6.q': 'Muss ich während der Reinigung anwesend sein?',
    'faq.6.a': 'Nein. Viele Kundinnen und Kunden übergeben uns einen Schlüssel. Wir dokumentieren jede Schlüsselübergabe schriftlich und bewahren Schlüssel gesichert auf.',

    /* ---- Final CTA ---- */
    'final.title': 'Holen Sie sich Ihre kostenlose Offerte.',
    'final.sub': 'Beschreiben Sie uns kurz, worum es geht. Sie erhalten innert 24 Stunden eine verbindliche Pauschale — ohne Verpflichtung.',

    /* ---- Services page ---- */
    'meta.services.title': 'Leistungen — Durmisi&Clean',
    'meta.services.desc': 'Unterhaltsreinigung, Umzugsreinigung, Fensterreinigung, Baureinigung, Büroreinigung und Grundreinigung in der Schweiz.',
    'sp.title': 'Unsere Leistungen im Detail',
    'sp.sub': 'Sechs Kernbereiche, klar abgegrenzt und sauber kalkuliert. Was Sie hier nicht finden, fragen Sie trotzdem an — vieles lässt sich einrichten.',
    'sp.included': 'Im Leistungsumfang enthalten',
    'sp.ideal': 'Ideal für',

    'svc.unterhalt.long': 'Die Unterhaltsreinigung ist das Rückgrat einer gepflegten Liegenschaft. Wir kommen nach einem festen Rhythmus, mit einem festen Team und einer schriftlichen Leistungsliste, damit jederzeit nachvollziehbar ist, was gemacht wurde. Sie definieren die Frequenz, wir übernehmen den Rest.',
    'svc.unterhalt.ideal': 'Wohnbauten, Treppenhäuser, Praxen, Kanzleien, Gewerbeliegenschaften und Verwaltungen mit wiederkehrendem Bedarf.',
    'svc.unterhalt.i1': 'Böden saugen, feucht wischen und pflegen',
    'svc.unterhalt.i2': 'Sanitäranlagen reinigen und desinfizieren',
    'svc.unterhalt.i3': 'Küchen und Aufenthaltsräume',
    'svc.unterhalt.i4': 'Treppenhaus, Lift und Eingangsbereich',
    'svc.unterhalt.i5': 'Abfallentsorgung und Verbrauchsmaterial',
    'svc.unterhalt.i6': 'Schriftlicher Leistungsnachweis pro Einsatz',

    'svc.umzug.long': 'Die Umzugsreinigung entscheidet darüber, ob Sie Ihr Mietzinsdepot vollständig zurückerhalten. Wir reinigen nach den Kriterien, die Schweizer Verwaltungen bei der Abnahme tatsächlich prüfen — und wir übergeben auf Wunsch direkt vor Ort. Wird etwas beanstandet, kommen wir innert 48 Stunden kostenlos zurück.',
    'svc.umzug.ideal': 'Mieterinnen und Mieter, Eigentümerinnen und Eigentümer, Verwaltungen und Umzugsunternehmen.',
    'svc.umzug.i1': 'Küche inklusive Backofen, Dampfabzug und Kühlschrank',
    'svc.umzug.i2': 'Bad und WC vollständig entkalkt',
    'svc.umzug.i3': 'Fenster, Rahmen und Storen innen und aussen',
    'svc.umzug.i4': 'Böden, Sockelleisten, Türen und Schränke',
    'svc.umzug.i5': 'Balkon, Keller und Estrich nach Absprache',
    'svc.umzug.i6': 'Übergabe an die Verwaltung mit Abnahmegarantie',

    'svc.fenster.long': 'Saubere Fenster verändern einen Raum sofort. Wir arbeiten mit entmineralisiertem Wasser und Teleskoptechnik, dadurch bleiben auch hoch gelegene Flächen streifenfrei und trocknen ohne Kalkränder. Auf Wunsch in festem Turnus zwei- bis viermal jährlich.',
    'svc.fenster.ideal': 'Privathaushalte, Ladenlokale mit Schaufenstern, Büros und Liegenschaften mit grossen Glasflächen.',
    'svc.fenster.i1': 'Glasflächen innen und aussen',
    'svc.fenster.i2': 'Rahmen, Falze und Fensterbänke',
    'svc.fenster.i3': 'Storen, Rollläden und Jalousien',
    'svc.fenster.i4': 'Wintergärten und Glasgeländer',
    'svc.fenster.i5': 'Schaufenster und Eingangsverglasung',
    'svc.fenster.i6': 'Arbeiten in der Höhe mit geeigneter Technik',

    'svc.bau.long': 'Nach dem Bau ist der Termin heilig. Wir richten uns nach Ihrem Bauprogramm und liefern in den üblichen Etappen: Grobreinigung während der Bauphase, Feinreinigung vor der Abnahme und Bauendreinigung zum Bezug. Entsorgung von Bauschutt und Schutzfolien inbegriffen.',
    'svc.bau.ideal': 'Generalunternehmen, Architektinnen und Architekten, Bauherrschaften sowie private Umbauprojekte.',
    'svc.bau.i1': 'Grobreinigung während der Bauphase',
    'svc.bau.i2': 'Entfernen von Schutzfolien und Klebeetiketten',
    'svc.bau.i3': 'Zement-, Gips- und Farbrückstände',
    'svc.bau.i4': 'Feinreinigung aller Oberflächen',
    'svc.bau.i5': 'Bauendreinigung zum Bezugstermin',
    'svc.bau.i6': 'Entsorgung von Verpackung und Bauabfall',

    'svc.buero.long': 'Büroreinigung heisst vor allem: nicht stören. Wir arbeiten früh morgens, abends oder am Wochenende, halten uns an Ihre Zutrittsregeln und behandeln alles, was auf Schreibtischen liegt, als vertraulich. Alle Mitarbeitenden sind auf Verschwiegenheit verpflichtet.',
    'svc.buero.ideal': 'Büros, Arztpraxen, Anwaltskanzleien, Coworking-Flächen, Studios und Gewerberäume.',
    'svc.buero.i1': 'Arbeitsplätze, Tische und Kontaktflächen',
    'svc.buero.i2': 'Sitzungszimmer und Empfangsbereich',
    'svc.buero.i3': 'Sanitäranlagen und Teeküche',
    'svc.buero.i4': 'Böden, Teppiche und Hartbeläge',
    'svc.buero.i5': 'Abfall- und Wertstoffentsorgung',
    'svc.buero.i6': 'Auffüllen von Papier-, Seifen- und Hygienematerial',

    'svc.grund.long': 'Die Grundreinigung setzt dort an, wo die tägliche Reinigung nicht mehr hinkommt. Wir arbeiten mit Dampf, Einscheibenmaschine und Spezialmitteln — gegen Kalk, Fett, Nikotin und eingewachsenen Schmutz. Danach ist der Ausgangszustand wiederhergestellt und der Unterhalt wieder einfach.',
    'svc.grund.ideal': 'Objekte nach längerer Nutzung, vor Neuvermietung, nach Mieterwechsel oder bei Übernahme einer Liegenschaft.',
    'svc.grund.i1': 'Küche inklusive Fett- und Kalkentfernung',
    'svc.grund.i2': 'Bad, Fugen und Sanitärkeramik',
    'svc.grund.i3': 'Grundreinigung von Hartböden mit Maschine',
    'svc.grund.i4': 'Teppich- und Polsterreinigung nach Absprache',
    'svc.grund.i5': 'Türen, Schränke und Innenflächen',
    'svc.grund.i6': 'Geruchsneutralisierung auf Wunsch',

    /* ---- About page ---- */
    'meta.about.title': 'Über uns — Durmisi&Clean',
    'meta.about.desc': 'Wer hinter Durmisi&Clean steht: ein familiengeführter Reinigungsbetrieb mit festen Teams, fairen Anstellungen und verbindlichen Preisen.',
    'ab.title': 'Ein Familienbetrieb, kein Callcenter',
    'ab.sub': 'Bei uns nimmt eine Person ab, die das Objekt danach auch tatsächlich kennt. Das ist der ganze Unterschied.',
    'ab.story.eyebrow': 'Unsere Geschichte',
    'ab.story.title': 'Angefangen mit einem Auto und einer Checkliste',
    'ab.story.p1': 'Durmisi&Clean ist aus der einfachen Beobachtung entstanden, dass Reinigung selten am Putzen scheitert — sondern an Terminen, die nicht eingehalten werden, an wechselnden Gesichtern und an Rechnungen, die höher ausfallen als besprochen.',
    'ab.story.p2': 'Also haben wir es andersherum aufgebaut: feste Teams pro Kunde, verbindliche Pauschalen vor dem ersten Einsatz und eine schriftliche Checkliste, an der man uns messen kann. Gewachsen sind wir seither fast ausschliesslich über Weiterempfehlungen.',
    'ab.story.p3': 'Heute betreuen wir Privathaushalte, Büros und Liegenschaften in der ganzen Region — mit demselben Anspruch wie am ersten Tag: Was wir zusagen, halten wir.',

    'ab.values.eyebrow': 'Wofür wir stehen',
    'ab.values.title': 'Vier Grundsätze, die nicht verhandelbar sind',
    'ab.v1.title': 'Verlässlichkeit',
    'ab.v1.text': 'Ein vereinbarter Termin ist ein Versprechen. Wenn etwas dazwischenkommt, erfahren Sie es von uns — und zwar bevor Sie darauf warten.',
    'ab.v2.title': 'Diskretion',
    'ab.v2.text': 'Wir arbeiten in Wohnungen, Praxen und Kanzleien. Alle Mitarbeitenden sind auf Verschwiegenheit verpflichtet, ohne Ausnahme.',
    'ab.v3.title': 'Faire Anstellung',
    'ab.v3.text': 'Ordentliche Verträge, branchenübliche Löhne, korrekte Sozialabgaben. Wer gut behandelt wird, arbeitet auch gut.',
    'ab.v4.title': 'Ehrliche Preise',
    'ab.v4.text': 'Der Preis in der Offerte ist der Preis auf der Rechnung. Wird etwas teurer, fragen wir vorher — nicht nachher.',

    'ab.promise.eyebrow': 'Qualitätsversprechen',
    'ab.promise.title': 'Woran Sie uns messen dürfen',
    'ab.promise.p': 'Jeder Auftrag folgt einer schriftlichen Checkliste, die auf Ihr Objekt zugeschnitten ist. Nach jedem Einsatz wird sie abgezeichnet. Stimmt etwas nicht, gilt eine einfache Regel: Sie melden sich innert 48 Stunden, wir kommen zurück, und die Nachreinigung ist kostenlos.',
    'ab.promise.i1': 'Schriftliche Checkliste für jedes Objekt',
    'ab.promise.i2': 'Fester Ansprechpartner, direkt erreichbar',
    'ab.promise.i3': 'Kostenlose Nachreinigung innert 48 Stunden',
    'ab.promise.i4': 'Betriebshaftpflicht und angemeldetes Personal',
    'ab.promise.i5': 'Ökologische, biologisch abbaubare Mittel',
    'ab.promise.i6': 'Eigene Maschinen und eigenes Material',

    'ab.team.eyebrow': 'Das Team',
    'ab.team.title': 'Menschen, die Sie wiedererkennen',
    'ab.team.p': 'Unsere Mitarbeitenden sind fest angestellt, geschult und einem festen Kundenkreis zugeteilt. Sie kennen Ihr Objekt, Ihre Wünsche und die Stellen, auf die es Ihnen ankommt. Neue Mitarbeitende arbeiten die ersten Einsätze immer begleitet.',

    /* ---- Contact page ---- */
    'meta.contact.title': 'Kontakt — Durmisi&Clean',
    'meta.contact.desc': 'Kontaktieren Sie Durmisi&Clean für eine kostenlose und unverbindliche Offerte. Antwort innert 24 Stunden.',
    'ct.title': 'Sprechen wir über Ihr Objekt',
    'ct.sub': 'Rufen Sie an, schreiben Sie uns oder füllen Sie das Formular aus. Sie erhalten innert 24 Stunden eine Antwort — mit einer verbindlichen Pauschale, kostenlos und unverbindlich.',
    'ct.form.title': 'Offerte anfordern',
    'ct.form.sub': 'Je mehr Sie uns mitgeben, desto genauer wird die Offerte. Pflichtfelder sind markiert.',
    'ct.f.name': 'Name',
    'ct.f.namePh': 'Vor- und Nachname',
    'ct.f.email': 'E-Mail',
    'ct.f.emailPh': 'name@beispiel.ch',
    'ct.f.phone': 'Telefon',
    'ct.f.phonePh': '079 000 00 00',
    'ct.f.service': 'Gewünschte Leistung',
    'ct.f.serviceDefault': 'Bitte auswählen',
    'ct.f.serviceOther': 'Etwas anderes',
    'ct.f.size': 'Objektgrösse',
    'ct.f.sizePh': 'z. B. 3,5-Zimmer-Wohnung, 92 m²',
    'ct.f.date': 'Wunschtermin',
    'ct.f.message': 'Ihre Nachricht',
    'ct.f.messagePh': 'Beschreiben Sie kurz, worum es geht: Objekt, Zustand, Termin und alles, was wir wissen sollten.',
    'ct.f.privacy': 'Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden.',
    'ct.f.submit': 'Anfrage senden',
    'ct.f.note': 'Das Formular öffnet Ihr E-Mail-Programm mit der fertig ausgefüllten Nachricht. Lieber direkt? Rufen Sie uns an.',
    'ct.err.required': 'Bitte füllen Sie dieses Feld aus.',
    'ct.err.email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    'ct.err.privacy': 'Bitte bestätigen Sie die Einwilligung.',
    'ct.status.ok': 'Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die vorbereitete Nachricht ab — dann ist Ihre Anfrage bei uns.',
    'ct.status.err': 'Bitte prüfen Sie die markierten Felder.',
    'ct.status.mailFail': 'Ihr E-Mail-Programm liess sich nicht öffnen. Bitte senden Sie uns Ihre Anfrage direkt per E-Mail oder rufen Sie uns an.',
    'ct.direct.title': 'Direkt erreichbar',
    'ct.direct.phone': 'Telefon',
    'ct.direct.email': 'E-Mail',
    'ct.direct.whatsapp': 'WhatsApp',
    'ct.direct.address': 'Adresse',
    'ct.hours.title': 'Öffnungszeiten',
    'ct.hours.mofr': 'Montag – Freitag',
    'ct.hours.sa': 'Samstag',
    'ct.hours.so': 'Sonntag',
    'ct.hours.sotime': 'Geschlossen',
    'ct.hours.note': 'Umzugstermine ausserhalb dieser Zeiten sind nach Absprache möglich.',

    /* ---- Legal page ---- */
    'meta.legal.title': 'Impressum & Datenschutz — Durmisi&Clean',
    'meta.legal.desc': 'Impressum und Datenschutzerklärung von Durmisi&Clean.',
    'lg.title': 'Impressum & Datenschutz',
    'lg.sub': 'Angaben zum Betrieb und Informationen zur Bearbeitung Ihrer Daten.',
    'lg.imp.title': 'Impressum',
    'lg.imp.company': 'Firma',
    'lg.imp.owner': 'Inhaber',
    'lg.imp.address': 'Adresse',
    'lg.imp.contact': 'Kontakt',
    'lg.imp.uid': 'UID-Nummer',
    'lg.imp.register': 'Handelsregister',
    'lg.dp.title': 'Datenschutzerklärung',
    'lg.dp.1.title': 'Verantwortliche Stelle',
    'lg.dp.1.text': 'Verantwortlich für die Bearbeitung von Personendaten auf dieser Website ist Durmisi&Clean, erreichbar über die im Impressum genannten Kontaktangaben.',
    'lg.dp.2.title': 'Welche Daten wir bearbeiten',
    'lg.dp.2.text': 'Diese Website ist statisch und setzt keine Analyse-Cookies und keine Tracking-Dienste ein. Wir erheben von sich aus keine Personendaten. Nutzen Sie das Kontaktformular, wird die Nachricht in Ihrem eigenen E-Mail-Programm erstellt und von Ihnen versendet — die Daten gelangen also erst zu uns, wenn Sie das E-Mail tatsächlich abschicken.',
    'lg.dp.3.title': 'Zweck und Aufbewahrung',
    'lg.dp.3.text': 'Angaben, die Sie uns per E-Mail, Telefon oder WhatsApp übermitteln, bearbeiten wir ausschliesslich zur Beantwortung Ihrer Anfrage und zur Abwicklung eines allfälligen Auftrags. Wir bewahren sie nur so lange auf, wie dies dafür oder aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist.',
    'lg.dp.4.title': 'Weitergabe an Dritte',
    'lg.dp.4.text': 'Ihre Daten werden nicht verkauft und nicht zu Werbezwecken an Dritte weitergegeben. Eine Weitergabe erfolgt nur, soweit sie zur Auftragsabwicklung nötig oder gesetzlich vorgeschrieben ist.',
    'lg.dp.5.title': 'Ihre Rechte',
    'lg.dp.5.text': 'Sie haben im Rahmen des schweizerischen Datenschutzgesetzes das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Bearbeitung Ihrer Personendaten. Wenden Sie sich dafür an die im Impressum genannte Adresse.',
    'lg.dp.6.title': 'Hosting und Sicherheit',
    'lg.dp.6.text': 'Beim Aufruf der Website können durch den Hosting-Anbieter technische Zugriffsdaten wie IP-Adresse, Datum und Uhrzeit protokolliert werden. Diese dienen dem sicheren Betrieb und werden nicht zur Identifikation einzelner Personen verwendet.',
    'lg.dp.7.title': 'Änderungen',
    'lg.dp.7.text': 'Wir können diese Datenschutzerklärung jederzeit anpassen. Massgebend ist die auf dieser Seite veröffentlichte Fassung.',

    /* ---- Footer ---- */
    'ft.about': 'Familiengeführter Reinigungsbetrieb für Privathaushalte, Büros und Liegenschaften. Feste Teams, verbindliche Pauschalen und eine schriftliche Abnahmegarantie.',
    'ft.services': 'Leistungen',
    'ft.company': 'Unternehmen',
    'ft.contact': 'Kontakt',
    'ft.legal': 'Impressum & Datenschutz',
    'ft.rights': 'Alle Rechte vorbehalten.',
    'ft.hours': 'Mo–Fr 07:00–18:00 · Sa 08:00–14:00'
  },

  en: {
    /* ---- Global ---- */
    'brand.tag': 'Cleaning Services Switzerland',
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About us',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'cta.quote': 'Free quote',
    'cta.quoteLong': 'Request your free quote',
    'cta.call': 'Call us',
    'cta.callNow': 'Call now',
    'cta.whatsapp': 'WhatsApp',
    'cta.contact': 'Get in touch',
    'cta.allServices': 'View all services',
    'cta.details': 'Learn more',
    'lang.switch': 'Switch language',
    'lang.de': 'German',
    'lang.en': 'English',

    'topbar.hours': 'Mon–Fri 07:00–18:00 · Sat 08:00–14:00',
    'topbar.free': 'Quotes are free and without obligation',

    /* ---- Home: hero ---- */
    'meta.home.title': 'Durmisi&Clean — Professional Cleaning Services in Switzerland',
    'meta.home.desc': 'Maintenance cleaning, move-out cleaning with handover guarantee, window, construction, office and deep cleaning. Free quote within 24 hours.',
    'hero.chip1': 'Handover guarantee',
    'hero.chip2': 'Insured & registered',
    'hero.chip3': 'Quote within 24 hours',
    'hero.title': 'We clean, so you can <span class="hl-underline">breathe easy</span>.',
    'hero.sub': 'Professional cleaning for private homes, offices and properties — thorough, punctual, and backed by a written handover guarantee on every move-out clean.',
    'hero.trust': 'Over 200 customers trust us with their spaces.',

    'kpi.years': 'Years of experience',
    'kpi.objects': 'Properties cleaned',
    'kpi.rating': 'Average rating',
    'kpi.response': 'Reply to enquiries',

    /* ---- Home: services ---- */
    'services.eyebrow': 'Our Services',
    'services.title': 'One partner for every kind of cleaning',
    'services.sub': 'From the weekly maintenance round to final construction cleaning — all from one team, with fixed crews and binding flat-rate prices.',

    'svc.unterhalt.name': 'Maintenance Cleaning',
    'svc.unterhalt.short': 'Regular cleaning on a fixed schedule — daily, weekly or as agreed. The same team every time, the same standard every time.',
    'svc.umzug.name': 'Move-Out Cleaning',
    'svc.umzug.badge': 'Handover guarantee',
    'svc.umzug.short': 'Apartment and house cleaning when moving in or out. We hand over directly to the property manager — and stay until it is signed off.',
    'svc.fenster.name': 'Window Cleaning',
    'svc.fenster.short': 'Glass, frames, blinds and shutters — streak-free inside and out, including hard-to-reach positions.',
    'svc.bau.name': 'Construction Cleaning',
    'svc.bau.short': 'Rough, fine and final cleaning after new builds, conversions or renovations. Ready in time for the handover date.',
    'svc.buero.name': 'Office Cleaning',
    'svc.buero.short': 'Discreet cleaning of offices, practices and commercial premises — outside your business hours, with no interruption to your work.',
    'svc.grund.name': 'Deep Cleaning',
    'svc.grund.short': 'Intensive deep cleaning for kitchens, bathrooms and floors. Limescale, grease and built-up residue removed completely.',

    /* ---- Home: why ---- */
    'why.eyebrow': 'Why Durmisi&Clean',
    'why.title': 'The reasons our customers stay',
    'why.sub': 'Cleaning is a matter of trust. We have built the business around earning that trust again on every single visit.',
    'why.1.title': 'Always the same team',
    'why.1.text': 'A fixed, trained team is assigned to you. You never have to explain anything twice, and no stranger turns up at your door unannounced.',
    'why.2.title': 'Insured & properly registered',
    'why.2.text': 'Public liability insurance, properly employed staff and full social contributions. No shortcuts, no grey areas.',
    'why.3.title': 'Binding flat rates',
    'why.3.text': 'You get the price in writing before we start. No hourly billing, no surcharges, no surprises on the invoice.',
    'why.4.title': 'Eco-friendly products',
    'why.4.text': 'Biodegradable products that are safe for children, pets and people with allergies — with no compromise on the result.',

    /* ---- Home: process ---- */
    'process.eyebrow': 'How we work',
    'process.title': 'Four steps to a clean handover',
    'process.1.title': 'Enquiry',
    'process.1.text': 'Get in touch by phone, form or WhatsApp. We reply within 24 hours — weekends included.',
    'process.2.title': 'Visit & quote',
    'process.2.text': 'We look at the property, either on site or from your photos, and send you a binding flat-rate quote.',
    'process.3.title': 'The clean',
    'process.3.text': 'The team arrives at the agreed time — with their own machines, their own materials and a clear checklist.',
    'process.4.title': 'Sign-off',
    'process.4.text': 'We walk through it together. The job is only finished once you or the property manager are satisfied.',

    /* ---- Home: guarantee ---- */
    'guar.eyebrow': 'Our handover guarantee',
    'guar.title': 'We stay until the handover is signed off.',
    'guar.text': 'On every move-out clean: if the property manager flags anything at handover, we come back free of charge and put it right — within 48 hours. Guaranteed in writing, in every quote.',
    'guar.b1': 'Free re-clean if anything is flagged',
    'guar.b2': 'Back on site within 48 hours',
    'guar.b3': 'Direct handover to the property manager',
    'guar.b4': 'Written into every single quote',
    'guar.seal': 'Signed off or we return',

    /* ---- Home: testimonials ---- */
    'test.eyebrow': 'Testimonials',
    'test.title': 'What our customers say',
    'test.1.quote': 'Handover after eight years in the flat — I was braced for an argument. The property manager signed off without a single comment. That is exactly what you pay for.',
    'test.1.name': 'M. Keller',
    'test.1.meta': 'Private customer, move-out cleaning',
    'test.2.quote': 'They have cleaned our offices for two years. Same team every time, always punctual — on Monday morning you can tell straight away that someone has been in.',
    'test.2.name': 'T. Brunner',
    'test.2.meta': 'Managing Director, maintenance cleaning',
    'test.3.quote': 'After the renovation the flat looked like a building site. Two days later it was ready to move into. Fair flat rate, no add-on charges.',
    'test.3.name': 'S. Fischer',
    'test.3.meta': 'Property owner, construction cleaning',

    /* ---- Home: areas ---- */
    'areas.eyebrow': 'Service area',
    'areas.title': 'Where we work',
    'areas.sub': 'We cover the whole region. Your town not on the list? Ask anyway — we can usually make it work.',

    /* ---- FAQ ---- */
    'faq.eyebrow': 'Frequently asked',
    'faq.title': 'Answers before you have to ask',
    'faq.1.q': 'What does a move-out clean cost?',
    'faq.1.a': 'The price depends on the size and condition of the property and on whether windows, blinds and balcony are included. You always receive a binding flat rate before we start — free and without obligation. We are happy to give you a ballpark figure for your apartment size over the phone.',
    'faq.2.q': 'How quickly can you come?',
    'faq.2.a': 'Maintenance cleaning usually starts within a week. Move-out cleans are best booked two to three weeks ahead. Short-notice appointments are often possible on request — just ask.',
    'faq.3.q': 'Do you bring your own materials and machines?',
    'faq.3.a': 'Yes, everything. Cleaning products, machines and consumables are included in the price unless agreed otherwise. You do not need to provide anything.',
    'faq.4.q': 'Are you insured?',
    'faq.4.a': 'Yes. We carry public liability insurance. All staff are properly employed, covered by accident insurance and registered for social insurance through us.',
    'faq.5.q': 'What if I am not happy with the result?',
    'faq.5.a': 'Let us know within 48 hours of the clean. We come back and re-clean the areas in question free of charge. On move-out cleans our handover guarantee applies on top of this.',
    'faq.6.q': 'Do I need to be there during the clean?',
    'faq.6.a': 'No. Many customers simply give us a key. Every key handover is documented in writing and keys are kept secured.',

    /* ---- Final CTA ---- */
    'final.title': 'Get your free quote.',
    'final.sub': 'Tell us briefly what you need. You will have a binding flat rate within 24 hours — with no obligation.',

    /* ---- Services page ---- */
    'meta.services.title': 'Services — Durmisi&Clean',
    'meta.services.desc': 'Maintenance, move-out, window, construction, office and deep cleaning services in Switzerland.',
    'sp.title': 'Our services in detail',
    'sp.sub': 'Six core areas, clearly defined and cleanly costed. If what you need is not listed here, ask anyway — most things can be arranged.',
    'sp.included': 'What is included',
    'sp.ideal': 'Ideal for',

    'svc.unterhalt.long': 'Maintenance cleaning is the backbone of a well-kept property. We come on a fixed rhythm, with a fixed team and a written scope of work, so it is always clear what was done. You set the frequency, we take care of the rest.',
    'svc.unterhalt.ideal': 'Residential buildings, stairwells, medical practices, law firms, commercial properties and management companies with recurring needs.',
    'svc.unterhalt.i1': 'Vacuuming, mopping and floor care',
    'svc.unterhalt.i2': 'Cleaning and disinfecting sanitary facilities',
    'svc.unterhalt.i3': 'Kitchens and break rooms',
    'svc.unterhalt.i4': 'Stairwell, lift and entrance area',
    'svc.unterhalt.i5': 'Waste disposal and consumables',
    'svc.unterhalt.i6': 'Written record of work for every visit',

    'svc.umzug.long': 'The move-out clean decides whether you get your full rental deposit back. We clean to the criteria Swiss property managers actually check at handover — and we can be there in person for the sign-off. If anything is flagged, we return within 48 hours at no cost.',
    'svc.umzug.ideal': 'Tenants, owners, property management companies and removal firms.',
    'svc.umzug.i1': 'Kitchen including oven, extractor hood and fridge',
    'svc.umzug.i2': 'Bathroom and WC fully descaled',
    'svc.umzug.i3': 'Windows, frames and blinds inside and out',
    'svc.umzug.i4': 'Floors, skirting boards, doors and cupboards',
    'svc.umzug.i5': 'Balcony, cellar and attic as agreed',
    'svc.umzug.i6': 'Handover to the property manager with guarantee',

    'svc.fenster.long': 'Clean windows change a room instantly. We work with demineralised water and telescopic systems, so even high panes dry streak-free and without limescale marks. Available as a fixed cycle two to four times a year.',
    'svc.fenster.ideal': 'Private homes, shops with display windows, offices and properties with large glazed areas.',
    'svc.fenster.i1': 'Glass surfaces inside and out',
    'svc.fenster.i2': 'Frames, rebates and window sills',
    'svc.fenster.i3': 'Blinds, roller shutters and venetian blinds',
    'svc.fenster.i4': 'Conservatories and glass balustrades',
    'svc.fenster.i5': 'Shop windows and entrance glazing',
    'svc.fenster.i6': 'Work at height with the proper equipment',

    'svc.bau.long': 'After a build, the date is sacred. We work to your construction programme and deliver in the usual stages: rough cleaning during the build, fine cleaning before inspection, and final cleaning for handover. Removal of construction debris and protective film is included.',
    'svc.bau.ideal': 'General contractors, architects, developers and private renovation projects.',
    'svc.bau.i1': 'Rough cleaning during the construction phase',
    'svc.bau.i2': 'Removal of protective film and adhesive labels',
    'svc.bau.i3': 'Cement, plaster and paint residue',
    'svc.bau.i4': 'Fine cleaning of all surfaces',
    'svc.bau.i5': 'Final construction clean for the handover date',
    'svc.bau.i6': 'Disposal of packaging and construction waste',

    'svc.buero.long': 'Office cleaning is mostly about not getting in the way. We work early mornings, evenings or weekends, follow your access rules, and treat everything left on a desk as confidential. All staff are bound to confidentiality.',
    'svc.buero.ideal': 'Offices, medical practices, law firms, coworking spaces, studios and commercial premises.',
    'svc.buero.i1': 'Workstations, desks and contact surfaces',
    'svc.buero.i2': 'Meeting rooms and reception area',
    'svc.buero.i3': 'Sanitary facilities and kitchenette',
    'svc.buero.i4': 'Floors, carpets and hard surfaces',
    'svc.buero.i5': 'Waste and recycling disposal',
    'svc.buero.i6': 'Restocking paper, soap and hygiene supplies',

    'svc.grund.long': 'Deep cleaning picks up where routine cleaning can no longer reach. We work with steam, single-disc machines and specialist products — against limescale, grease, nicotine and ingrained dirt. Afterwards the property is back to its original state and easy to maintain again.',
    'svc.grund.ideal': 'Properties after long use, before re-letting, after a tenant change, or when taking over a building.',
    'svc.grund.i1': 'Kitchen including grease and limescale removal',
    'svc.grund.i2': 'Bathroom, grout and sanitary ceramics',
    'svc.grund.i3': 'Machine deep cleaning of hard floors',
    'svc.grund.i4': 'Carpet and upholstery cleaning as agreed',
    'svc.grund.i5': 'Doors, cupboards and interior surfaces',
    'svc.grund.i6': 'Odour neutralisation on request',

    /* ---- About page ---- */
    'meta.about.title': 'About us — Durmisi&Clean',
    'meta.about.desc': 'The people behind Durmisi&Clean: a family-run cleaning company with fixed teams, fair employment and binding prices.',
    'ab.title': 'A family business, not a call centre',
    'ab.sub': 'When you call, you reach someone who will actually know your property afterwards. That is the whole difference.',
    'ab.story.eyebrow': 'Our story',
    'ab.story.title': 'It started with one car and a checklist',
    'ab.story.p1': 'Durmisi&Clean grew out of a simple observation: cleaning rarely fails at the cleaning. It fails at appointments that are not kept, at faces that keep changing, and at invoices that come in higher than agreed.',
    'ab.story.p2': 'So we built it the other way round: a fixed team per customer, a binding flat rate before the first visit, and a written checklist you can hold us to. Since then we have grown almost entirely through recommendations.',
    'ab.story.p3': 'Today we look after private homes, offices and properties across the region — with the same standard as on day one: what we promise, we deliver.',

    'ab.values.eyebrow': 'What we stand for',
    'ab.values.title': 'Four principles that are not up for negotiation',
    'ab.v1.title': 'Reliability',
    'ab.v1.text': 'An agreed appointment is a promise. If something does come up, you hear it from us — before you are left waiting.',
    'ab.v2.title': 'Discretion',
    'ab.v2.text': 'We work in homes, practices and law firms. Every member of staff is bound to confidentiality, without exception.',
    'ab.v3.title': 'Fair employment',
    'ab.v3.text': 'Proper contracts, standard industry wages, correct social contributions. People who are treated well do good work.',
    'ab.v4.title': 'Honest pricing',
    'ab.v4.text': 'The price on the quote is the price on the invoice. If something will cost more, we ask beforehand — not afterwards.',

    'ab.promise.eyebrow': 'Quality promise',
    'ab.promise.title': 'What you can hold us to',
    'ab.promise.p': 'Every job follows a written checklist tailored to your property, signed off after each visit. If something is not right, one simple rule applies: tell us within 48 hours, we come back, and the re-clean is free.',
    'ab.promise.i1': 'A written checklist for every property',
    'ab.promise.i2': 'One named contact, directly reachable',
    'ab.promise.i3': 'Free re-clean within 48 hours',
    'ab.promise.i4': 'Liability insurance and registered staff',
    'ab.promise.i5': 'Eco-friendly, biodegradable products',
    'ab.promise.i6': 'Our own machines and our own materials',

    'ab.team.eyebrow': 'The team',
    'ab.team.title': 'People you will recognise',
    'ab.team.p': 'Our staff are permanently employed, trained, and assigned to a fixed group of customers. They know your property, your preferences and the spots that matter to you. New team members are always accompanied on their first visits.',

    /* ---- Contact page ---- */
    'meta.contact.title': 'Contact — Durmisi&Clean',
    'meta.contact.desc': 'Contact Durmisi&Clean for a free, no-obligation quote. We reply within 24 hours.',
    'ct.title': 'Let us talk about your property',
    'ct.sub': 'Call, write, or fill in the form. You will hear back within 24 hours — with a binding flat rate, free and without obligation.',
    'ct.form.title': 'Request a quote',
    'ct.form.sub': 'The more you tell us, the more accurate the quote. Required fields are marked.',
    'ct.f.name': 'Name',
    'ct.f.namePh': 'First and last name',
    'ct.f.email': 'E-mail',
    'ct.f.emailPh': 'name@example.ch',
    'ct.f.phone': 'Phone',
    'ct.f.phonePh': '079 000 00 00',
    'ct.f.service': 'Service required',
    'ct.f.serviceDefault': 'Please select',
    'ct.f.serviceOther': 'Something else',
    'ct.f.size': 'Property size',
    'ct.f.sizePh': 'e.g. 3.5-room apartment, 92 m²',
    'ct.f.date': 'Preferred date',
    'ct.f.message': 'Your message',
    'ct.f.messagePh': 'Briefly describe what you need: the property, its condition, the date, and anything else we should know.',
    'ct.f.privacy': 'I agree that my details may be used to process my enquiry.',
    'ct.f.submit': 'Send enquiry',
    'ct.f.note': 'The form opens your e-mail programme with the message already filled in. Prefer to talk? Give us a call.',
    'ct.err.required': 'Please fill in this field.',
    'ct.err.email': 'Please enter a valid e-mail address.',
    'ct.err.privacy': 'Please confirm your consent.',
    'ct.status.ok': 'Your e-mail programme has opened. Please send the prepared message — then your enquiry is with us.',
    'ct.status.err': 'Please check the highlighted fields.',
    'ct.status.mailFail': 'Your e-mail programme could not be opened. Please send us your enquiry by e-mail directly, or give us a call.',
    'ct.direct.title': 'Reach us directly',
    'ct.direct.phone': 'Phone',
    'ct.direct.email': 'E-mail',
    'ct.direct.whatsapp': 'WhatsApp',
    'ct.direct.address': 'Address',
    'ct.hours.title': 'Opening hours',
    'ct.hours.mofr': 'Monday – Friday',
    'ct.hours.sa': 'Saturday',
    'ct.hours.so': 'Sunday',
    'ct.hours.sotime': 'Closed',
    'ct.hours.note': 'Move-out appointments outside these hours can be arranged.',

    /* ---- Legal page ---- */
    'meta.legal.title': 'Legal notice & privacy — Durmisi&Clean',
    'meta.legal.desc': 'Legal notice and privacy policy of Durmisi&Clean.',
    'lg.title': 'Legal notice & privacy',
    'lg.sub': 'Company details and information on how your data is handled.',
    'lg.imp.title': 'Legal notice',
    'lg.imp.company': 'Company',
    'lg.imp.owner': 'Owner',
    'lg.imp.address': 'Address',
    'lg.imp.contact': 'Contact',
    'lg.imp.uid': 'VAT / UID number',
    'lg.imp.register': 'Commercial register',
    'lg.dp.title': 'Privacy policy',
    'lg.dp.1.title': 'Data controller',
    'lg.dp.1.text': 'Responsible for the processing of personal data on this website is Durmisi&Clean, reachable via the contact details in the legal notice above.',
    'lg.dp.2.title': 'What data we process',
    'lg.dp.2.text': 'This website is static and uses no analytics cookies and no tracking services. We collect no personal data on our own initiative. If you use the contact form, the message is composed in your own e-mail programme and sent by you — so the data only reaches us once you actually send that e-mail.',
    'lg.dp.3.title': 'Purpose and retention',
    'lg.dp.3.text': 'Information you send us by e-mail, phone or WhatsApp is processed solely to answer your enquiry and to carry out any resulting work. We keep it only as long as needed for that purpose or as required by statutory retention rules.',
    'lg.dp.4.title': 'Disclosure to third parties',
    'lg.dp.4.text': 'Your data is never sold and never passed to third parties for advertising. It is shared only where necessary to carry out the work or where required by law.',
    'lg.dp.5.title': 'Your rights',
    'lg.dp.5.text': 'Under Swiss data protection law you have the right to information, correction, deletion and restriction of processing of your personal data. Please contact us at the address in the legal notice.',
    'lg.dp.6.title': 'Hosting and security',
    'lg.dp.6.text': 'When the website is accessed, the hosting provider may log technical access data such as IP address, date and time. This serves secure operation and is not used to identify individual visitors.',
    'lg.dp.7.title': 'Changes',
    'lg.dp.7.text': 'We may update this privacy policy at any time. The version published on this page applies.',

    /* ---- Footer ---- */
    'ft.about': 'A family-run cleaning company for private homes, offices and properties. Fixed teams, binding flat rates and a written handover guarantee.',
    'ft.services': 'Services',
    'ft.company': 'Company',
    'ft.contact': 'Contact',
    'ft.legal': 'Legal notice & privacy',
    'ft.rights': 'All rights reserved.',
    'ft.hours': 'Mon–Fri 07:00–18:00 · Sat 08:00–14:00'
  }
};

/* --- 3. ENGINE ----------------------------------------------------------- */
(function () {
  'use strict';

  var STORAGE_KEY = 'dc-lang';
  var DEFAULT_LANG = 'de';

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setStored(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
  }

  /** Fill every [data-contact] / [data-contact-href] node from CONTACT. */
  function applyContact(root) {
    (root || document).querySelectorAll('[data-contact]').forEach(function (el) {
      var v = CONTACT[el.getAttribute('data-contact')];
      if (v != null) el.textContent = v;
    });
    (root || document).querySelectorAll('[data-contact-href]').forEach(function (el) {
      var v = CONTACT[el.getAttribute('data-contact-href')];
      if (v != null) el.setAttribute('href', v);
    });
  }

  /** Swap all translatable text and attributes to `lang`. */
  function applyLang(lang) {
    var dict = I18N[lang] || I18N[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = dict[el.getAttribute('data-i18n')];
      if (val != null) el.innerHTML = val;
    });

    // data-i18n-attr="placeholder:key; aria-label:key"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length < 2) return;
        var attr = parts[0].trim();
        var val = dict[parts.slice(1).join(':').trim()];
        if (attr && val != null) el.setAttribute(attr, val);
      });
    });

    document.documentElement.setAttribute('lang', lang);
    applyContact();

    // Toggle UI state
    var toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) {
      toggle.setAttribute('data-active', lang);
      toggle.querySelectorAll('[data-lang]').forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
      });
    }

    setStored(lang);
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
  }

  function reveal() {
    document.documentElement.classList.remove('i18n-boot');
  }

  function init() {
    var lang = getStored();
    if (lang !== 'de' && lang !== 'en') lang = DEFAULT_LANG;

    applyLang(lang);
    reveal();

    var toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-lang]');
        if (!btn) return;
        applyLang(btn.getAttribute('data-lang'));
      });
    }
  }

  // Expose for main.js (form messages need the active dictionary).
  window.DC = window.DC || {};
  window.DC.t = function (key) {
    var lang = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'de';
    return (I18N[lang] && I18N[lang][key]) || (I18N[DEFAULT_LANG][key]) || key;
  };
  window.DC.lang = function () {
    return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'de';
  };
  window.DC.contact = CONTACT;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
