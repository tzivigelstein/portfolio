import React from 'react'
import { render } from '@testing-library/react'
import I18nProvider from 'next-translate/I18nProvider'

// Renders a component with the real translations of one language.
export default function renderWithI18n (ui, lang = 'en') {
  const namespaces = {
    common: require(`../locales/${lang}/common.json`),
    timeline: require(`../locales/${lang}/timeline.json`),
    christmas: require(`../locales/${lang}/christmas.json`)
  }

  return render(
    <I18nProvider lang={lang} namespaces={namespaces}>
      {ui}
    </I18nProvider>
  )
}
