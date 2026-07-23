/* @ds-bundle: {"format":4,"namespace":"ESTHERDesignSystem_16943b","components":[{"name":"BookCard","sourcePath":"components/cards/BookCard.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"ChatBubbles","sourcePath":"components/code/ChatBubbles.jsx"},{"name":"CodePanel","sourcePath":"components/code/CodePanel.jsx"},{"name":"TypewriterSection","sourcePath":"components/code/TypewriterSection.jsx"},{"name":"CompareList","sourcePath":"components/compare/CompareList.jsx"},{"name":"CompareTable","sourcePath":"components/compare/CompareTable.jsx"},{"name":"Accordion","sourcePath":"components/interactive/Accordion.jsx"},{"name":"Carousel","sourcePath":"components/interactive/Carousel.jsx"},{"name":"Checklist","sourcePath":"components/interactive/Checklist.jsx"},{"name":"DarkReveal","sourcePath":"components/interactive/DarkReveal.jsx"},{"name":"FlipCard","sourcePath":"components/interactive/FlipCard.jsx"},{"name":"GalleryRail","sourcePath":"components/interactive/GalleryRail.jsx"},{"name":"HorizontalScrollCards","sourcePath":"components/interactive/HorizontalScrollCards.jsx"},{"name":"HoverRevealCard","sourcePath":"components/interactive/HoverRevealCard.jsx"},{"name":"StackedCards","sourcePath":"components/interactive/StackedCards.jsx"},{"name":"FlowSteps","sourcePath":"components/layout/FlowSteps.jsx"},{"name":"FullBleedHero","sourcePath":"components/layout/FullBleedHero.jsx"},{"name":"NewspaperLayout","sourcePath":"components/layout/NewspaperLayout.jsx"},{"name":"RingSteps","sourcePath":"components/layout/RingSteps.jsx"},{"name":"SectionHeader","sourcePath":"components/layout/SectionHeader.jsx"},{"name":"TimelineCards","sourcePath":"components/layout/TimelineCards.jsx"},{"name":"AvatarCluster","sourcePath":"components/misc/AvatarCluster.jsx"},{"name":"Button","sourcePath":"components/misc/Button.jsx"},{"name":"Modal","sourcePath":"components/misc/Modal.jsx"},{"name":"MoodCalendar","sourcePath":"components/misc/MoodCalendar.jsx"},{"name":"Reveal","sourcePath":"components/misc/Reveal.jsx"},{"name":"Signature","sourcePath":"components/misc/Signature.jsx"},{"name":"FilterTabs","sourcePath":"components/navigation/FilterTabs.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"TabSwitcher","sourcePath":"components/navigation/TabSwitcher.jsx"},{"name":"PullQuote","sourcePath":"components/quotes/PullQuote.jsx"},{"name":"QuoteBlock","sourcePath":"components/quotes/QuoteBlock.jsx"},{"name":"QuoteSection","sourcePath":"components/quotes/QuoteSection.jsx"},{"name":"ComicText","sourcePath":"components/text-fx/ComicText.jsx"},{"name":"Highlighter","sourcePath":"components/text-fx/Highlighter.jsx"},{"name":"KineticText","sourcePath":"components/text-fx/KineticText.jsx"},{"name":"MorphingText","sourcePath":"components/text-fx/MorphingText.jsx"},{"name":"PixelImage","sourcePath":"components/text-fx/PixelImage.jsx"},{"name":"SparklesText","sourcePath":"components/text-fx/SparklesText.jsx"},{"name":"SpinningText","sourcePath":"components/text-fx/SpinningText.jsx"},{"name":"TypingText","sourcePath":"components/text-fx/TypingText.jsx"},{"name":"HotelCard","sourcePath":"components/travel/HotelCard.jsx"},{"name":"TicketCard","sourcePath":"components/travel/TicketCard.jsx"}],"sourceHashes":{"components/cards/BookCard.jsx":"64ff350d0ccb","components/cards/Card.jsx":"799d983e2f61","components/code/ChatBubbles.jsx":"c9c2f51b33eb","components/code/CodePanel.jsx":"06c2b6cc0029","components/code/TypewriterSection.jsx":"e7f87f689070","components/compare/CompareList.jsx":"0e680c3f30f4","components/compare/CompareTable.jsx":"721456fe0c17","components/interactive/Accordion.jsx":"6e84c56f8853","components/interactive/Carousel.jsx":"ca16b9f21405","components/interactive/Checklist.jsx":"0b26ca0db79a","components/interactive/DarkReveal.jsx":"fbc3e20c849d","components/interactive/FlipCard.jsx":"254cfa1a7075","components/interactive/GalleryRail.jsx":"564b912feb0e","components/interactive/HorizontalScrollCards.jsx":"074e5c225b50","components/interactive/HoverRevealCard.jsx":"bd52aa9a5f31","components/interactive/StackedCards.jsx":"2a697e4225aa","components/layout/FlowSteps.jsx":"d8e8f8bf80a8","components/layout/FullBleedHero.jsx":"ee77966ac48a","components/layout/NewspaperLayout.jsx":"24f5b22af08a","components/layout/RingSteps.jsx":"127d7e85cf5c","components/layout/SectionHeader.jsx":"35e054266fba","components/layout/TimelineCards.jsx":"26bc57b568fd","components/misc/AvatarCluster.jsx":"4c597b53b5a7","components/misc/Button.jsx":"9e213cb0b2d8","components/misc/Modal.jsx":"c9ecc6d1665f","components/misc/MoodCalendar.jsx":"1bd56ed61e8e","components/misc/Reveal.jsx":"a3e526626cbd","components/misc/Signature.jsx":"cbbdbb47773b","components/navigation/FilterTabs.jsx":"473146c3841b","components/navigation/NavBar.jsx":"378dad935f5c","components/navigation/TabSwitcher.jsx":"8d57adacb386","components/quotes/PullQuote.jsx":"1713d15f8af0","components/quotes/QuoteBlock.jsx":"e52c7af1ed71","components/quotes/QuoteSection.jsx":"e107c557d7bf","components/text-fx/ComicText.jsx":"61a89f3458cb","components/text-fx/Highlighter.jsx":"8e18051ce2da","components/text-fx/KineticText.jsx":"450aa288acdd","components/text-fx/MorphingText.jsx":"b583364c3fde","components/text-fx/PixelImage.jsx":"26f077b90b54","components/text-fx/SparklesText.jsx":"7daac820f61f","components/text-fx/SpinningText.jsx":"19aec92ff7c6","components/text-fx/TypingText.jsx":"195ed90c82ea","components/travel/HotelCard.jsx":"1c1044237e42","components/travel/TicketCard.jsx":"c1f0a080b655"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ESTHERDesignSystem_16943b = window.ESTHERDesignSystem_16943b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/BookCard.jsx
try { (() => {
function BookCard(props) {
  const {
    category,
    title,
    author,
    verdict,
    tags = [],
    onClick,
    className = '',
    style
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-book-card ${className}`,
    style: style,
    onClick: onClick
  }, category && /*#__PURE__*/React.createElement("span", {
    className: "ds-book-badge"
  }, category), /*#__PURE__*/React.createElement("h3", null, title), author && /*#__PURE__*/React.createElement("p", {
    className: "ds-book-author"
  }, author), verdict && /*#__PURE__*/React.createElement("p", {
    className: "ds-book-verdict"
  }, verdict), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ds-book-tags"
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    className: "ds-book-tag",
    key: i
  }, t))));
}
Object.assign(__ds_scope, { BookCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BookCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
const ACCENT_SOLID = {
  blue: 'var(--color-blue)',
  yellow: 'var(--color-yellow)',
  red: 'var(--color-red)'
};
const ACCENT_WASH = {
  blue: 'var(--wash-blue)',
  yellow: 'var(--wash-yellow)',
  red: 'var(--wash-red)'
};
function Card(props) {
  const {
    variant = 'magazine',
    title,
    desc,
    number,
    tagLabel,
    icon,
    emoji,
    dashedLabel,
    meta,
    romanIndex,
    accent = 'blue',
    className = '',
    style
  } = props;
  const accentStyle = {
    '--accent-solid': ACCENT_SOLID[accent] || ACCENT_SOLID.blue,
    '--accent-wash': ACCENT_WASH[accent] || ACCENT_WASH.blue,
    ...style
  };
  if (variant === 'numbered') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-card-numbered ${className}`,
      style: accentStyle
    }, number && /*#__PURE__*/React.createElement("span", {
      className: "ds-card-number"
    }, number), /*#__PURE__*/React.createElement("h3", {
      className: "ds-card-title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "ds-card-desc"
    }, desc));
  }
  if (variant === 'tag') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-card-tag ${className}`,
      style: accentStyle
    }, tagLabel && /*#__PURE__*/React.createElement("span", {
      className: "ds-pill"
    }, tagLabel), /*#__PURE__*/React.createElement("h3", {
      className: "ds-card-title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "ds-card-desc"
    }, desc));
  }
  if (variant === 'icon') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-card-icon ${className}`,
      style: accentStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-card-icon-area"
    }, icon), /*#__PURE__*/React.createElement("div", {
      className: "ds-card-icon-content"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "ds-card-title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "ds-card-desc"
    }, desc)));
  }
  if (variant === 'editorial') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-card-editorial ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-card-num"
    }, romanIndex), /*#__PURE__*/React.createElement("h3", {
      className: "ds-card-title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "ds-card-desc"
    }, desc), tagLabel && /*#__PURE__*/React.createElement("span", {
      className: "ds-card-tag-label"
    }, tagLabel));
  }
  if (variant === 'dashed') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-card-dashed ${className}`,
      style: accentStyle
    }, dashedLabel && /*#__PURE__*/React.createElement("span", {
      className: "ds-card-label"
    }, dashedLabel), /*#__PURE__*/React.createElement("h3", {
      className: "ds-card-title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "ds-card-desc"
    }, desc));
  }
  if (variant === 'gradient') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-card-gradient ${className}`,
      style: accentStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-card-emoji"
    }, emoji), /*#__PURE__*/React.createElement("h3", {
      className: "ds-card-title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "ds-card-desc"
    }, desc));
  }
  if (variant === 'typo') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-card-typo ${className}`,
      style: accentStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-card-divider"
    }), /*#__PURE__*/React.createElement("h3", {
      className: "ds-card-title"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "ds-card-desc"
    }, desc), meta && /*#__PURE__*/React.createElement("span", {
      className: "ds-card-meta"
    }, meta));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-card-magazine ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ds-card-title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "ds-card-desc"
  }, desc), tagLabel && /*#__PURE__*/React.createElement("span", {
    className: "ds-card-aux"
  }, tagLabel));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/code/ChatBubbles.jsx
try { (() => {
function ChatBubbles({
  messages = [],
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-chat-container ${className}`,
    style: style
  }, messages.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `ds-chat-bubble ds-chat-bubble--${m.role === 'user' ? 'user' : 'ai'}`
  }, m.text)));
}
Object.assign(__ds_scope, { ChatBubbles });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/code/ChatBubbles.jsx", error: String((e && e.message) || e) }); }

// components/code/CodePanel.jsx
try { (() => {
function CodePanel(props) {
  const {
    variant = 'macos',
    filename,
    tabLabel,
    cornerTag,
    children,
    className = '',
    style
  } = props;
  if (variant === 'notebook') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-code-notebook ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-code-holes"
    }), tabLabel && /*#__PURE__*/React.createElement("div", {
      className: "ds-code-tab"
    }, "\u270F\uFE0F ", tabLabel), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, children)));
  }
  if (variant === 'typewriter') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-code-typewriter ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, children, /*#__PURE__*/React.createElement("span", {
      className: "ds-code-cursor"
    }))));
  }
  if (variant === 'clean') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-code-clean ${className}`,
      style: style
    }, cornerTag && /*#__PURE__*/React.createElement("span", {
      className: "ds-code-corner-tag"
    }, cornerTag), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, children)));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-code-macos ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-code-titlebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-code-dots"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-dot ds-dot-red"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-dot ds-dot-yellow"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-dot ds-dot-green2"
  })), filename && /*#__PURE__*/React.createElement("span", {
    className: "ds-code-filename"
  }, filename)), /*#__PURE__*/React.createElement("div", {
    className: "ds-code-body"
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, children))));
}
Object.assign(__ds_scope, { CodePanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/code/CodePanel.jsx", error: String((e && e.message) || e) }); }

// components/code/TypewriterSection.jsx
try { (() => {
function TypewriterSection({
  header,
  lines = [],
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: `ds-typewriter-section ${className}`,
    style: style
  }, header && /*#__PURE__*/React.createElement("div", {
    className: "ds-type-header"
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "ds-type-content"
  }, lines.map((line, i) => {
    if (line === '') return /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "ds-type-blank"
    });
    const isWarn = typeof line === 'object' && line !== null && line.warn;
    const text = typeof line === 'object' && line !== null ? line.text : line;
    return /*#__PURE__*/React.createElement("p", {
      key: i,
      className: isWarn ? 'ds-type-warn' : ''
    }, text);
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-type-cursor"
  })));
}
Object.assign(__ds_scope, { TypewriterSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/code/TypewriterSection.jsx", error: String((e && e.message) || e) }); }

// components/compare/CompareList.jsx
try { (() => {
function CompareList(props) {
  const {
    variant = 'cards',
    annotation,
    dontLabel = "Don't",
    doLabel = 'Do',
    dontIcon = '🚫',
    doIcon = '✅',
    dontStampLabel = 'AVOID',
    doStampLabel = 'PREFER',
    dontItems = [],
    doItems = [],
    pairs = [],
    rows = [],
    className = '',
    style
  } = props;
  if (variant === 'handwritten') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-compare-handwrite ${className}`,
      style: style
    }, annotation && /*#__PURE__*/React.createElement("span", {
      className: "ds-compare-annotation"
    }, annotation), /*#__PURE__*/React.createElement("div", {
      className: "ds-compare-titles"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-compare-col-title ds-compare-col-title--dont"
    }, dontLabel, " \u2717"), /*#__PURE__*/React.createElement("div", {
      className: "ds-compare-col-title ds-compare-col-title--do"
    }, doLabel, " \u2713")), /*#__PURE__*/React.createElement("div", {
      className: "ds-compare-items"
    }, pairs.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-compare-item ds-compare-item--dont"
    }, p.dont), /*#__PURE__*/React.createElement("div", {
      className: "ds-compare-item"
    }, p.do)))));
  }
  if (variant === 'table') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-compare-table ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-compare-table-header"
    }, /*#__PURE__*/React.createElement("span", null, "\u5B9E\u8DF5"), /*#__PURE__*/React.createElement("span", null, dontLabel), /*#__PURE__*/React.createElement("span", null, doLabel)), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
      className: "ds-compare-table-row",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-compare-practice"
    }, r.practice), /*#__PURE__*/React.createElement("span", {
      className: "ds-compare-status"
    }, r.dont || '⛔'), /*#__PURE__*/React.createElement("span", {
      className: "ds-compare-status"
    }, r.do || '✅'))));
  }
  if (variant === 'stamped') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-compare-stamp ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-compare-stamp-col ds-compare-stamp-col--dont"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-compare-stamp-label"
    }, dontStampLabel), /*#__PURE__*/React.createElement("ul", null, dontItems.map((it, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, it)))), /*#__PURE__*/React.createElement("div", {
      className: "ds-compare-stamp-col ds-compare-stamp-col--do"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-compare-stamp-label"
    }, doStampLabel), /*#__PURE__*/React.createElement("ul", null, doItems.map((it, i) => /*#__PURE__*/React.createElement("li", {
      key: i
    }, it)))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-compare-cards ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-compare-block ds-compare-block--dont"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-compare-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-compare-icon"
  }, dontIcon), /*#__PURE__*/React.createElement("span", {
    className: "ds-compare-label"
  }, dontLabel)), /*#__PURE__*/React.createElement("ul", null, dontItems.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, it)))), /*#__PURE__*/React.createElement("div", {
    className: "ds-compare-block ds-compare-block--do"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-compare-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-compare-icon"
  }, doIcon), /*#__PURE__*/React.createElement("span", {
    className: "ds-compare-label"
  }, doLabel)), /*#__PURE__*/React.createElement("ul", null, doItems.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, it)))));
}
Object.assign(__ds_scope, { CompareList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/compare/CompareList.jsx", error: String((e && e.message) || e) }); }

// components/compare/CompareTable.jsx
try { (() => {
function CompareTable(props) {
  const {
    variant = 'editorial',
    label = 'VS',
    number,
    title,
    subtitle,
    rows = [],
    dims,
    className = '',
    style
  } = props;
  if (variant === 'dot') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-dot-table ${className}`,
      style: style
    }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
      className: "ds-dot-row",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-dot-dim"
    }, r.dim), /*#__PURE__*/React.createElement("div", {
      className: "ds-dot-val"
    }, r.valA), /*#__PURE__*/React.createElement("div", {
      className: "ds-dot-val"
    }, r.valB))));
  }
  return /*#__PURE__*/React.createElement("section", {
    className: `ds-compare-editorial ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-editorial-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-editorial-side"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ds-editorial-biglabel"
  }, label), number && /*#__PURE__*/React.createElement("span", {
    className: "ds-section-header-number"
  }, number), title && /*#__PURE__*/React.createElement("h2", {
    className: "ds-section-header-title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "ds-editorial-subtitle"
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "ds-editorial-rows"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "ds-editorial-row",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-editorial-num"
  }, r.num), /*#__PURE__*/React.createElement("div", {
    className: "ds-editorial-col"
  }, /*#__PURE__*/React.createElement("h4", null, r.aLabel), /*#__PURE__*/React.createElement("p", null, r.aVal)), /*#__PURE__*/React.createElement("div", {
    className: "ds-editorial-col"
  }, /*#__PURE__*/React.createElement("h4", null, r.bLabel), /*#__PURE__*/React.createElement("p", null, r.bVal)))), dims && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-editorial-dim"
  }, dims)))));
}
Object.assign(__ds_scope, { CompareTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/compare/CompareTable.jsx", error: String((e && e.message) || e) }); }

// components/interactive/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  className = '',
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-accordion ${className}`,
    style: style
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `ds-accordion-item ${open === i ? 'open' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-accordion-header",
    onClick: () => setOpen(open === i ? -1 : i)
  }, it.step != null && /*#__PURE__*/React.createElement("span", {
    className: "ds-accordion-step"
  }, it.step), /*#__PURE__*/React.createElement("h4", null, it.title), /*#__PURE__*/React.createElement("span", {
    className: "ds-accordion-arrow"
  }, "\u25BC")), /*#__PURE__*/React.createElement("div", {
    className: "ds-accordion-body"
  }, /*#__PURE__*/React.createElement("p", null, it.content)))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/interactive/Carousel.jsx
try { (() => {
function Carousel({
  slides = [],
  className = '',
  style
}) {
  const [idx, setIdx] = React.useState(0);
  const total = slides.length || 1;
  const move = dir => setIdx(i => (i + dir + total) % total);
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-carousel ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-carousel-slides",
    style: {
      transform: `translateX(-${idx * 100}%)`
    }
  }, slides.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "ds-carousel-slide",
    key: i
  }, s.icon && /*#__PURE__*/React.createElement("div", {
    className: "ds-carousel-icon"
  }, s.icon), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.desc)))), /*#__PURE__*/React.createElement("div", {
    className: "ds-carousel-arrows"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ds-carousel-arrow",
    onClick: () => move(-1)
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ds-carousel-arrow",
    onClick: () => move(1)
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    className: "ds-carousel-dots"
  }, slides.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `ds-carousel-dot ${i === idx ? 'active' : ''}`
  }))));
}
Object.assign(__ds_scope, { Carousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/Carousel.jsx", error: String((e && e.message) || e) }); }

// components/interactive/Checklist.jsx
try { (() => {
function Checklist({
  items = [],
  className = '',
  style
}) {
  const [checked, setChecked] = React.useState(() => new Set());
  const toggle = i => setChecked(prev => {
    const next = new Set(prev);
    if (next.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-checklist ${className}`,
    style: style
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "ds-checklist-item",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: `ds-checklist-check ${checked.has(i) ? 'checked' : ''}`,
    onClick: () => toggle(i)
  }), /*#__PURE__*/React.createElement("div", {
    className: "ds-checklist-content"
  }, /*#__PURE__*/React.createElement("h4", null, it.title), it.desc && /*#__PURE__*/React.createElement("p", null, it.desc), it.tag && /*#__PURE__*/React.createElement("span", {
    className: "ds-checklist-tag"
  }, it.tag)))));
}
Object.assign(__ds_scope, { Checklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/Checklist.jsx", error: String((e && e.message) || e) }); }

// components/interactive/DarkReveal.jsx
try { (() => {
function DarkReveal(props) {
  const {
    bgChar,
    quote,
    translation,
    showLabel = '显示翻译',
    hideLabel = '隐藏翻译',
    className = '',
    style
  } = props;
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-dark-reveal ${className}`,
    style: style
  }, bgChar && /*#__PURE__*/React.createElement("div", {
    className: "ds-dark-reveal-bgchar"
  }, bgChar), /*#__PURE__*/React.createElement("div", {
    className: "ds-dark-reveal-content"
  }, /*#__PURE__*/React.createElement("h2", null, quote), /*#__PURE__*/React.createElement("div", {
    className: "ds-dark-reveal-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: `ds-dark-reveal-trans ${show ? 'show' : ''}`
  }, translation), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ds-dark-reveal-btn",
    onClick: () => setShow(s => !s)
  }, show ? hideLabel : showLabel)));
}
Object.assign(__ds_scope, { DarkReveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/DarkReveal.jsx", error: String((e && e.message) || e) }); }

// components/interactive/FlipCard.jsx
try { (() => {
function FlipCard(props) {
  const {
    trigger = 'click',
    front,
    back,
    imageSrc,
    imageAlt = '',
    label,
    className = '',
    style
  } = props;
  const [flipped, setFlipped] = React.useState(false);
  if (trigger === 'hover') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-flip-hover-scene ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-flip-hover-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-flip-hover-front"
    }, imageSrc && /*#__PURE__*/React.createElement("img", {
      src: imageSrc,
      alt: imageAlt
    }), label && /*#__PURE__*/React.createElement("div", {
      className: "ds-flip-hover-label"
    }, label)), /*#__PURE__*/React.createElement("div", {
      className: "ds-flip-hover-back"
    }, back)));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-flip-scene ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: `ds-flip-card ${flipped ? 'flipped' : ''}`,
    onClick: () => setFlipped(f => !f)
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-flip-front"
  }, front, /*#__PURE__*/React.createElement("p", {
    className: "ds-flip-hint"
  }, "\u21BA \u70B9\u51FB\u7FFB\u8F6C")), /*#__PURE__*/React.createElement("div", {
    className: "ds-flip-back"
  }, back)));
}
Object.assign(__ds_scope, { FlipCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/FlipCard.jsx", error: String((e && e.message) || e) }); }

// components/interactive/GalleryRail.jsx
try { (() => {
function GalleryRail({
  items = [],
  className = '',
  style
}) {
  const [active, setActive] = React.useState(0);
  const current = items[active] || {};
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-gallery-rail ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-gallery-thumbs"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: it.thumbSrc || it.fullSrc,
    style: {
      opacity: i === active ? 1 : 0.5
    },
    onClick: () => setActive(i),
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ds-gallery-main"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: it.fullSrc,
    style: {
      opacity: i === active ? 1 : 0
    },
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ds-gallery-panel"
  }, /*#__PURE__*/React.createElement("h3", null, current.title), current.meta && /*#__PURE__*/React.createElement("p", {
    className: "ds-gallery-meta"
  }, current.meta), /*#__PURE__*/React.createElement("p", {
    className: "ds-gallery-desc"
  }, current.desc)));
}
Object.assign(__ds_scope, { GalleryRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/GalleryRail.jsx", error: String((e && e.message) || e) }); }

// components/interactive/HorizontalScrollCards.jsx
try { (() => {
function HorizontalScrollCards({
  title,
  items = [],
  hint = '← 左右滑动查看全部 →',
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-hscroll ${className}`,
    style: style
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "ds-hscroll-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ds-hscroll-track"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "ds-hscroll-card",
    key: i
  }, it.num && /*#__PURE__*/React.createElement("span", {
    className: "ds-hscroll-num"
  }, it.num), /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", null, it.desc)))), hint && /*#__PURE__*/React.createElement("p", {
    className: "ds-hscroll-hint"
  }, hint));
}
Object.assign(__ds_scope, { HorizontalScrollCards });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/HorizontalScrollCards.jsx", error: String((e && e.message) || e) }); }

// components/interactive/HoverRevealCard.jsx
try { (() => {
function HoverRevealCard({
  text,
  sub,
  overlayText,
  overlayNote,
  hint = '悬停查看翻译 →',
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-reveal-card"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ds-reveal-text"
  }, text), sub && /*#__PURE__*/React.createElement("p", {
    className: "ds-reveal-sub"
  }, sub), /*#__PURE__*/React.createElement("div", {
    className: "ds-reveal-overlay"
  }, /*#__PURE__*/React.createElement("p", null, overlayText), overlayNote && /*#__PURE__*/React.createElement("p", {
    className: "ds-reveal-note"
  }, overlayNote))), hint && /*#__PURE__*/React.createElement("p", {
    className: "ds-reveal-hint"
  }, hint));
}
Object.assign(__ds_scope, { HoverRevealCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/HoverRevealCard.jsx", error: String((e && e.message) || e) }); }

// components/interactive/StackedCards.jsx
try { (() => {
function stackTransform(pos) {
  const y = [0, 12, 24, 36][pos] ?? 36;
  const s = [1, 0.96, 0.92, 0.88][pos] ?? 0.88;
  return `translateY(${y}px) scale(${s})`;
}
function stackOpacity(pos) {
  return [1, 0.8, 0.6, 0.4][pos] ?? 0.4;
}
function StackedCards({
  cards = [],
  hint = '点击卡片翻到下一张',
  className = '',
  style
}) {
  const [order, setOrder] = React.useState(() => cards.map((_, i) => i));
  const flip = () => setOrder(prev => [...prev.slice(1), prev[0]]);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-stack-container"
  }, order.map((cardIdx, pos) => {
    const c = cards[cardIdx] || {};
    return /*#__PURE__*/React.createElement("div", {
      key: cardIdx,
      className: "ds-stack-card",
      style: {
        zIndex: cards.length - pos,
        transform: stackTransform(pos),
        opacity: stackOpacity(pos)
      },
      onClick: flip
    }, c.tag && /*#__PURE__*/React.createElement("span", {
      className: "ds-stack-tag"
    }, c.tag), /*#__PURE__*/React.createElement("h3", null, c.title), /*#__PURE__*/React.createElement("p", null, c.desc));
  })), hint && /*#__PURE__*/React.createElement("p", {
    className: "ds-stack-hint"
  }, hint));
}
Object.assign(__ds_scope, { StackedCards });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/interactive/StackedCards.jsx", error: String((e && e.message) || e) }); }

// components/layout/FlowSteps.jsx
try { (() => {
function FlowSteps({
  steps = [],
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-flow ${className}`,
    style: style
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-flow-step"
  }, s), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "ds-flow-arrow"
  }, "\u2192"))));
}
Object.assign(__ds_scope, { FlowSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FlowSteps.jsx", error: String((e && e.message) || e) }); }

// components/layout/FullBleedHero.jsx
try { (() => {
function FullBleedHero({
  imageSrc,
  imageAlt = '',
  title,
  subtitle,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: `ds-mag-hero ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("img", {
    className: "ds-mag-hero-bg",
    src: imageSrc,
    alt: imageAlt
  }), /*#__PURE__*/React.createElement("div", {
    className: "ds-mag-hero-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ds-mag-hero-content"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ds-mag-hero-title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "ds-mag-hero-sub"
  }, subtitle)));
}
Object.assign(__ds_scope, { FullBleedHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FullBleedHero.jsx", error: String((e && e.message) || e) }); }

// components/layout/NewspaperLayout.jsx
try { (() => {
function NewspaperLayout({
  masthead,
  columns = [],
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: `ds-newspaper ${className}`,
    style: style
  }, masthead && /*#__PURE__*/React.createElement("div", {
    className: "ds-newspaper-masthead"
  }, masthead), /*#__PURE__*/React.createElement("div", {
    className: "ds-newspaper-grid"
  }, columns.map((col, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-newspaper-col"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ds-newspaper-headline"
  }, col.headline), /*#__PURE__*/React.createElement("p", {
    className: "ds-newspaper-body"
  }, col.body), col.handwrite && /*#__PURE__*/React.createElement("p", {
    className: "ds-newspaper-handwrite"
  }, col.handwrite)), i < columns.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "ds-newspaper-divider"
  })))));
}
Object.assign(__ds_scope, { NewspaperLayout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/NewspaperLayout.jsx", error: String((e && e.message) || e) }); }

// components/layout/RingSteps.jsx
try { (() => {
function RingSteps({
  steps = [],
  summary,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-ring-steps"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "ds-ring-step",
    key: i
  }, s.emoji && /*#__PURE__*/React.createElement("div", {
    className: "ds-ring-emoji"
  }, s.emoji), /*#__PURE__*/React.createElement("h4", null, s.title), s.sub && /*#__PURE__*/React.createElement("div", {
    className: "ds-ring-sub"
  }, s.sub)))), summary && /*#__PURE__*/React.createElement("p", {
    className: "ds-ring-summary"
  }, summary));
}
Object.assign(__ds_scope, { RingSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/RingSteps.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeader.jsx
try { (() => {
function SectionHeader({
  size = 'compact',
  number,
  title,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-section-header ds-section-header--${size} ${className}`,
    style: style
  }, number && /*#__PURE__*/React.createElement("span", {
    className: "ds-section-header-number"
  }, number), /*#__PURE__*/React.createElement("h2", {
    className: "ds-section-header-title"
  }, title));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/TimelineCards.jsx
try { (() => {
const COLORS = ['var(--color-blue)', 'var(--color-red)', '#805AD5', 'var(--color-blue-deep)'];
const WASHES = ['rgba(43,127,216,.15)', 'rgba(232,74,95,.15)', 'rgba(128,90,213,.15)', 'rgba(30,91,168,.15)'];
function TimelineCards({
  treatment = 'caveat-num',
  items = [],
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-tl ds-tl--${treatment} ${className}`,
    style: style
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "ds-tl-card",
    key: i,
    style: {
      '--tl-color': COLORS[i % 4],
      '--tl-wash': WASHES[i % 4]
    }
  }, treatment === 'bg-char' && /*#__PURE__*/React.createElement("span", {
    className: "ds-tl-bgchar"
  }, it.bgChar || (it.title ? String(it.title)[0] : '')), treatment === 'emoji' && it.emoji && /*#__PURE__*/React.createElement("div", {
    className: "ds-tl-emoji"
  }, it.emoji), treatment === 'caveat-num' && it.num && /*#__PURE__*/React.createElement("div", {
    className: "ds-tl-num"
  }, it.num), /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", null, it.desc))));
}
Object.assign(__ds_scope, { TimelineCards });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/TimelineCards.jsx", error: String((e && e.message) || e) }); }

// components/misc/AvatarCluster.jsx
try { (() => {
function AvatarCluster({
  src,
  alt = '',
  orbitLabels = [],
  size,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-avatar-cluster ${className}`,
    style: {
      ...(size ? {
        width: size,
        height: size
      } : {}),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-avatar-ring"
  }), /*#__PURE__*/React.createElement("img", {
    className: "ds-avatar-img",
    src: src,
    alt: alt
  }), orbitLabels.map((o, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ds-avatar-orbit-item",
    style: o.style || {}
  }, o.label)));
}
Object.assign(__ds_scope, { AvatarCluster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/misc/AvatarCluster.jsx", error: String((e && e.message) || e) }); }

// components/misc/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PARTICLE_COLORS = ['var(--color-blue)', 'var(--color-blue)', 'var(--color-yellow)', 'var(--color-yellow)', 'var(--color-yellow)', 'var(--color-red)'];
const SIZES = [12, 16, 20, 28, 36];
function useCoolMode(ref, enabled) {
  React.useEffect(() => {
    if (!enabled || !ref.current) return undefined;
    const btn = ref.current;
    let container = null;
    let particles = [];
    let animating = false;
    let interval;
    let raf;
    function getContainer() {
      if (container) return container;
      container = document.createElement('div');
      container.style.cssText = 'overflow:hidden;position:fixed;inset:0;pointer-events:none;z-index:2147483647;';
      document.body.appendChild(container);
      return container;
    }
    function gen(x, y) {
      const size = SIZES[Math.floor(Math.random() * SIZES.length)];
      const el = document.createElement('div');
      const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      el.innerHTML = `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" style="fill:${color}"/></svg>`;
      el.style.cssText = 'position:absolute;pointer-events:none;';
      const left = x - size / 2;
      const top = y - size / 2;
      el.style.transform = `translate3d(${left}px,${top}px,0)`;
      getContainer().appendChild(el);
      particles.push({
        el,
        left,
        top,
        size,
        speedHorz: Math.random() * 10,
        speedUp: Math.random() * 25 + 5,
        direction: Math.random() < 0.5 ? -1 : 1,
        spin: Math.random() * 360,
        spinSpd: Math.random() * 35 * (Math.random() < 0.5 ? -1 : 1)
      });
    }
    function refresh() {
      particles = particles.filter(p => {
        p.left -= p.speedHorz * p.direction;
        p.top -= p.speedUp;
        p.speedUp = Math.min(p.size, p.speedUp - 1);
        p.spin += p.spinSpd;
        if (p.top >= window.innerHeight + p.size) {
          p.el.remove();
          return false;
        }
        p.el.style.transform = `translate3d(${p.left}px,${p.top}px,0) rotate(${p.spin}deg)`;
        return true;
      });
    }
    function loop() {
      refresh();
      if (particles.length > 0 || animating) raf = requestAnimationFrame(loop);
    }
    function start(e) {
      const r = btn.getBoundingClientRect();
      const x = e.clientX || r.left + r.width / 2;
      const y = e.clientY || r.top + r.height / 2;
      for (let i = 0; i < 5; i++) gen(x, y);
      interval = setInterval(() => {
        if (particles.length < 35) gen(x + (Math.random() - 0.5) * 40, y + (Math.random() - 0.5) * 20);
      }, 40);
      if (!animating) {
        animating = true;
        loop();
      }
    }
    function stop() {
      clearInterval(interval);
      setTimeout(() => {
        if (!particles.length) animating = false;
      }, 2000);
    }
    btn.addEventListener('mousedown', start);
    btn.addEventListener('mouseup', stop);
    btn.addEventListener('mouseleave', stop);
    return () => {
      btn.removeEventListener('mousedown', start);
      btn.removeEventListener('mouseup', stop);
      btn.removeEventListener('mouseleave', stop);
      clearInterval(interval);
      cancelAnimationFrame(raf);
      particles.forEach(p => p.el.remove());
      if (container) container.remove();
    };
  }, [enabled, ref]);
}
function Button(props) {
  const {
    children,
    variant = 'blue',
    coolMode = false,
    href,
    onClick,
    className = '',
    style,
    ...rest
  } = props;
  const ref = React.useRef(null);
  useCoolMode(ref, coolMode);
  const cls = `ds-btn ds-btn--${variant} ${className}`;
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      ref: ref,
      href: href,
      className: cls,
      style: style,
      onClick: onClick
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: ref,
    type: "button",
    className: cls,
    style: style,
    onClick: onClick
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/misc/Button.jsx", error: String((e && e.message) || e) }); }

// components/misc/Modal.jsx
try { (() => {
function Modal({
  open,
  onClose,
  children,
  className = '',
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-modal-overlay ${className}`,
    style: style,
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-modal-close",
    onClick: e => {
      e.stopPropagation();
      onClose && onClose();
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    className: "ds-modal-scroll",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-modal-section"
  }, children)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/misc/Modal.jsx", error: String((e && e.message) || e) }); }

// components/misc/MoodCalendar.jsx
try { (() => {
function MoodCalendar({
  days = [],
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-cal-grid ${className}`,
    style: style
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "ds-cal-cell",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-cal-daynum"
  }, d.day), d.emoji && /*#__PURE__*/React.createElement("span", {
    className: "ds-cal-emoji"
  }, d.emoji))));
}
Object.assign(__ds_scope, { MoodCalendar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/misc/MoodCalendar.jsx", error: String((e && e.message) || e) }); }

// components/misc/Reveal.jsx
try { (() => {
function Reveal({
  as: Tag = 'div',
  delay,
  children,
  className = '',
  style
}) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let done = false;
    let obs;
    function reveal() {
      if (done) return;
      done = true;
      setVisible(true);
      cleanup();
    }

    // Fallback check — some sandboxed/embedded preview iframes never fire
    // IntersectionObserver callbacks at all. Without this, content wrapped
    // in Reveal would stay permanently at opacity:0. Treat IO as the
    // primary (best) signal but always cross-check geometry directly.
    function checkInView() {
      if (done) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh * 0.95 && rect.bottom > 0) reveal();
    }
    function cleanup() {
      if (obs) obs.disconnect();
      window.removeEventListener('scroll', checkInView);
      window.removeEventListener('resize', checkInView);
    }
    if (typeof IntersectionObserver !== 'undefined') {
      obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) reveal();
        });
      }, {
        threshold: 0.12
      });
      obs.observe(el);
    }
    checkInView();
    const raf = requestAnimationFrame(checkInView);
    const timer = setTimeout(checkInView, 300);
    window.addEventListener('scroll', checkInView, {
      passive: true
    });
    window.addEventListener('resize', checkInView);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      cleanup();
    };
  }, []);
  const delayClass = delay ? ` reveal-d${delay}` : '';
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    className: `reveal${visible ? ' visible' : ''}${delayClass} ${className}`,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/misc/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/misc/Signature.jsx
try { (() => {
function Signature({
  name = '志远',
  lines = [],
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-signature ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("p", {
    className: "ds-signature-name"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "ds-signature-lines"
  }, lines.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, l, i < lines.length - 1 && /*#__PURE__*/React.createElement("br", null)))));
}
Object.assign(__ds_scope, { Signature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/misc/Signature.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterTabs.jsx
try { (() => {
function FilterTabs({
  tags = [],
  active,
  onChange,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-filter-bar ${className}`,
    style: style
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: `ds-filter-tag ${t === active ? 'active' : ''}`,
    onClick: () => onChange && onChange(t)
  }, t)));
}
Object.assign(__ds_scope, { FilterTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  logo,
  links = [],
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: `ds-navbar ${className}`,
    style: style
  }, logo && /*#__PURE__*/React.createElement("span", {
    className: "ds-nav-logo"
  }, logo), /*#__PURE__*/React.createElement("div", {
    className: "ds-nav-links"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href || '#'
  }, l.label))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabSwitcher.jsx
try { (() => {
function TabSwitcher({
  tabs = [],
  defaultIndex = 0,
  className = '',
  style
}) {
  const [active, setActive] = React.useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-tabswitch ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-tabswitch-bar"
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `ds-tabswitch-item ${i === active ? 'active' : ''}`,
    onClick: () => setActive(i)
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    className: "ds-tabswitch-panels"
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `ds-tabswitch-panel ${i === active ? 'active' : ''}`
  }, t.content))));
}
Object.assign(__ds_scope, { TabSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabSwitcher.jsx", error: String((e && e.message) || e) }); }

// components/quotes/PullQuote.jsx
try { (() => {
function PullQuote({
  children,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-pull-quote ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("p", null, children));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quotes/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/quotes/QuoteBlock.jsx
try { (() => {
function QuoteBlock(props) {
  const {
    variant = 'minimal',
    title,
    desc,
    body,
    conclusion,
    badge = 'Key Insight ✦',
    prompt,
    source,
    children,
    className = '',
    style
  } = props;
  if (variant === 'editorial') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-quote-editorial ${className}`,
      style: style
    }, title && /*#__PURE__*/React.createElement("h3", {
      className: "ds-quote-title"
    }, title), desc && /*#__PURE__*/React.createElement("p", {
      className: "ds-quote-desc"
    }, desc), source && /*#__PURE__*/React.createElement("span", {
      className: "ds-quote-source"
    }, "\u2014 ", source));
  }
  if (variant === 'handwritten') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-quote-handwrite ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-quote-badge"
    }, badge), title && /*#__PURE__*/React.createElement("h3", {
      className: "ds-quote-title"
    }, title), desc && /*#__PURE__*/React.createElement("p", {
      className: "ds-quote-desc"
    }, desc));
  }
  if (variant === 'highlight') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-quote-highlight ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-quote-title"
    }, title), desc && /*#__PURE__*/React.createElement("p", {
      className: "ds-quote-desc"
    }, desc));
  }
  if (variant === 'terminal') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-quote-terminal ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-quote-toolbar"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-dot ds-dot-red"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ds-dot ds-dot-yellow"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ds-dot ds-dot-green"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ds-quote-body-wrap"
    }, prompt && /*#__PURE__*/React.createElement("div", {
      className: "ds-quote-prompt"
    }, prompt), title && /*#__PURE__*/React.createElement("h3", {
      className: "ds-quote-title"
    }, title), desc && /*#__PURE__*/React.createElement("p", {
      className: "ds-quote-desc"
    }, desc)));
  }
  if (variant === 'typo') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-quote-typo ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("p", null, children || desc));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-quote-minimal ${className}`,
    style: style
  }, body && /*#__PURE__*/React.createElement("p", {
    className: "ds-quote-body"
  }, body), /*#__PURE__*/React.createElement("div", {
    className: "ds-quote-rule"
  }), conclusion && /*#__PURE__*/React.createElement("p", {
    className: "ds-quote-conclusion"
  }, conclusion));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quotes/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/quotes/QuoteSection.jsx
try { (() => {
function QuoteSection(props) {
  const {
    variant = 'giant-centered',
    quote,
    attribution,
    summary,
    portraitSrc,
    portraitAlt = '',
    className = '',
    style
  } = props;
  if (variant === 'portrait-split') {
    return /*#__PURE__*/React.createElement("section", {
      className: `ds-quote-section ds-quote-section--portrait ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-quote-portrait"
    }, /*#__PURE__*/React.createElement("img", {
      src: portraitSrc,
      alt: portraitAlt
    })), /*#__PURE__*/React.createElement("div", {
      className: "ds-quote-portrait-content"
    }, /*#__PURE__*/React.createElement("p", {
      className: "ds-quote-section-text"
    }, "\u201C", quote, "\u201D"), attribution && /*#__PURE__*/React.createElement("p", {
      className: "ds-quote-section-attribution"
    }, attribution), summary && /*#__PURE__*/React.createElement("p", {
      className: "ds-quote-section-summary"
    }, summary)));
  }
  if (variant === 'ultra-minimal') {
    return /*#__PURE__*/React.createElement("section", {
      className: `ds-quote-section ds-quote-section--minimal ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-quote-minimal-inner"
    }, /*#__PURE__*/React.createElement("p", {
      className: "ds-quote-section-text"
    }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
      className: "ds-quote-minimal-attrib-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-quote-minimal-rule"
    }), attribution && /*#__PURE__*/React.createElement("span", {
      className: "ds-quote-section-attribution"
    }, attribution))));
  }
  return /*#__PURE__*/React.createElement("section", {
    className: `ds-quote-section ds-quote-section--giant ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "ds-quote-section-text"
  }, "\u201C", quote, "\u201D"), attribution && /*#__PURE__*/React.createElement("p", {
    className: "ds-quote-section-attribution"
  }, "\u2014 ", attribution)));
}
Object.assign(__ds_scope, { QuoteSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quotes/QuoteSection.jsx", error: String((e && e.message) || e) }); }

// components/text-fx/ComicText.jsx
try { (() => {
function ComicText({
  children,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-comic-text ${className}`,
    style: style
  }, children);
}
Object.assign(__ds_scope, { ComicText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text-fx/ComicText.jsx", error: String((e && e.message) || e) }); }

// components/text-fx/Highlighter.jsx
try { (() => {
const CLASS_MAP = {
  yellow: 'ds-hl-yellow',
  'blue-underline': 'ds-hl-blue-underline',
  'red-circle': 'ds-hl-red-circle',
  box: 'ds-hl-box'
};
function Highlighter({
  variant = 'yellow',
  children,
  className = '',
  style
}) {
  const cls = CLASS_MAP[variant] || CLASS_MAP.yellow;
  return /*#__PURE__*/React.createElement("span", {
    className: `${cls} ${className}`,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Highlighter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text-fx/Highlighter.jsx", error: String((e && e.message) || e) }); }

// components/text-fx/KineticText.jsx
try { (() => {
function KineticText({
  text = '',
  className = '',
  style
}) {
  const chars = React.useMemo(() => Array.from(text), [text]);
  const [hoverIdx, setHoverIdx] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-kinetic-text ${className}`,
    style: style
  }, chars.map((ch, i) => {
    const isNeighbor = hoverIdx !== -1 && Math.abs(hoverIdx - i) === 1;
    const isHover = hoverIdx === i;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      onMouseEnter: () => setHoverIdx(i),
      onMouseLeave: () => setHoverIdx(-1),
      style: {
        fontWeight: isHover ? 900 : isNeighbor ? 600 : undefined,
        WebkitTextStrokeColor: isHover ? 'var(--color-blue)' : undefined,
        color: isHover ? 'var(--color-blue)' : undefined,
        paddingInline: isHover ? '0.08em' : undefined
      }
    }, ch === ' ' ? '\u00A0' : ch);
  }));
}
Object.assign(__ds_scope, { KineticText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text-fx/KineticText.jsx", error: String((e && e.message) || e) }); }

// components/text-fx/MorphingText.jsx
try { (() => {
let morphIdCounter = 0;
function MorphingText({
  words = [],
  className = '',
  style
}) {
  const t1Ref = React.useRef(null);
  const t2Ref = React.useRef(null);
  const [filterId] = React.useState(() => `ds-morph-filter-${++morphIdCounter}`);
  React.useEffect(() => {
    if (!words.length) return undefined;
    const morphTime = 1.5;
    const cooldownTime = 0.5;
    let idx = 0;
    let morph = 0;
    let cooldown = cooldownTime;
    let time = new Date();
    let raf;
    const t1 = t1Ref.current;
    const t2 = t2Ref.current;
    function setStyles(f) {
      t2.style.filter = `blur(${Math.min(8 / f - 8, 100)}px)`;
      t2.style.opacity = `${Math.pow(f, 0.4) * 100}%`;
      const inv = 1 - f;
      t1.style.filter = `blur(${Math.min(8 / inv - 8, 100)}px)`;
      t1.style.opacity = `${Math.pow(inv, 0.4) * 100}%`;
      t1.textContent = words[idx % words.length];
      t2.textContent = words[(idx + 1) % words.length];
    }
    function animate() {
      raf = requestAnimationFrame(animate);
      const now = new Date();
      const dt = (now - time) / 1000;
      time = now;
      cooldown -= dt;
      if (cooldown <= 0) {
        morph -= cooldown;
        cooldown = 0;
        let f = morph / morphTime;
        if (f > 1) {
          cooldown = cooldownTime;
          f = 1;
        }
        setStyles(f);
        if (f === 1) idx++;
      } else {
        morph = 0;
        t2.style.filter = 'none';
        t2.style.opacity = '100%';
        t1.style.filter = 'none';
        t1.style.opacity = '0%';
      }
    }
    t1.textContent = words[0];
    t2.textContent = words[1] || words[0];
    animate();
    return () => cancelAnimationFrame(raf);
  }, [words]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    style: {
      height: 0,
      width: 0,
      position: 'fixed'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: filterId
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140"
  })))), /*#__PURE__*/React.createElement("div", {
    className: `ds-morph-container ${className}`,
    style: {
      filter: `url(#${filterId}) blur(0.6px)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-morph-text",
    ref: t1Ref
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-morph-text",
    ref: t2Ref
  })));
}
Object.assign(__ds_scope, { MorphingText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text-fx/MorphingText.jsx", error: String((e && e.message) || e) }); }

// components/text-fx/PixelImage.jsx
try { (() => {
function PixelImage({
  src,
  alt = '',
  rows = 6,
  cols = 6,
  size = 280,
  className = '',
  style
}) {
  const [visible, setVisible] = React.useState(false);
  const [revealed, setRevealed] = React.useState(false);
  const delaysRef = React.useRef(null);
  if (!delaysRef.current) {
    delaysRef.current = Array.from({
      length: rows * cols
    }, () => Math.random() * 1200);
  }
  React.useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 300);
    const t2 = setTimeout(() => setRevealed(true), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  const pieces = [];
  for (let i = 0; i < rows * cols; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const clipPath = `polygon(${col * (100 / cols)}% ${row * (100 / rows)}%, ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%, ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%, ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%)`;
    pieces.push(/*#__PURE__*/React.createElement("div", {
      key: i,
      className: `ds-pixel-piece ${visible ? 'visible' : ''}`,
      style: {
        clipPath,
        transitionDelay: `${delaysRef.current[i]}ms`
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: i === 0 ? alt : ''
    })));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-pixel-container ${revealed ? 'color-revealed' : ''} ${className}`,
    style: {
      width: size,
      height: size,
      ...style
    }
  }, pieces);
}
Object.assign(__ds_scope, { PixelImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text-fx/PixelImage.jsx", error: String((e && e.message) || e) }); }

// components/text-fx/SparklesText.jsx
try { (() => {
const DEFAULT_COLORS = ['var(--color-yellow)', 'var(--color-yellow)', 'var(--color-red)'];
function Sparkle({
  color,
  size,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ds-sparkle",
    style: style
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 21 21"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z",
    fill: color
  })));
}
function SparklesText({
  children,
  colors = DEFAULT_COLORS,
  count = 10,
  textColor,
  className = '',
  style
}) {
  const [sparkles, setSparkles] = React.useState([]);
  React.useEffect(() => {
    function makeSparkles() {
      return Array.from({
        length: count
      }, () => ({
        id: Math.random(),
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        size: 12 + Math.random() * 16,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        duration: 0.6 + Math.random() * 0.6
      }));
    }
    setSparkles(makeSparkles());
    const id = setInterval(() => setSparkles(makeSparkles()), 3000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  return /*#__PURE__*/React.createElement("span", {
    className: `ds-sparkles-wrap ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-sparkles-text",
    style: textColor ? {
      color: textColor
    } : undefined
  }, children), sparkles.map(s => /*#__PURE__*/React.createElement(Sparkle, {
    key: s.id,
    color: s.color,
    size: s.size,
    style: {
      left: s.left,
      top: s.top,
      animationDelay: `${s.delay}s`,
      animationDuration: `${s.duration}s`
    }
  })));
}
Object.assign(__ds_scope, { SparklesText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text-fx/SparklesText.jsx", error: String((e && e.message) || e) }); }

// components/text-fx/SpinningText.jsx
try { (() => {
function SpinningText({
  text = 'build • create • design • share • ',
  center = '✦',
  radius = 85,
  size = 200,
  className = '',
  style
}) {
  const letters = React.useMemo(() => Array.from(text), [text]);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      position: 'relative',
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-spinning-container",
    style: {
      width: size,
      height: size
    }
  }, letters.map((ch, i) => {
    const angle = 360 / letters.length * i;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`
      }
    }, ch);
  })), /*#__PURE__*/React.createElement("div", {
    className: "ds-spinning-center"
  }, center));
}
Object.assign(__ds_scope, { SpinningText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text-fx/SpinningText.jsx", error: String((e && e.message) || e) }); }

// components/text-fx/TypingText.jsx
try { (() => {
function TypingText(props) {
  const {
    words = [],
    typeSpeed = 100,
    deleteSpeed = 50,
    pause = 1500,
    betweenPause = 400,
    className = '',
    style
  } = props;
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    if (!words.length) return undefined;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;
    function tick() {
      const chars = Array.from(words[wordIndex]);
      if (!isDeleting) {
        charIndex++;
        setText(chars.slice(0, charIndex).join(''));
        if (charIndex >= chars.length) {
          timer = setTimeout(() => {
            isDeleting = true;
            tick();
          }, pause);
          return;
        }
        timer = setTimeout(tick, typeSpeed);
      } else {
        charIndex--;
        setText(chars.slice(0, charIndex).join(''));
        if (charIndex <= 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(tick, betweenPause);
          return;
        }
        timer = setTimeout(tick, deleteSpeed);
      }
    }
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [words, typeSpeed, deleteSpeed, pause, betweenPause]);
  return /*#__PURE__*/React.createElement("span", {
    className: `ds-typing-container ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-typing-text"
  }, text), /*#__PURE__*/React.createElement("span", {
    className: "ds-typing-cursor"
  }));
}
Object.assign(__ds_scope, { TypingText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text-fx/TypingText.jsx", error: String((e && e.message) || e) }); }

// components/travel/HotelCard.jsx
try { (() => {
function HotelCard(props) {
  const {
    variant = 'editorial',
    nameZh,
    nameEn,
    dateRange,
    nights,
    roomType,
    breakfast,
    checkIn,
    note,
    cityTag,
    bodyLines = [],
    metaTags = [],
    bedInfo,
    className = '',
    style
  } = props;
  if (variant === 'postcard') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-hotel-postcard ${className}`,
      style: style
    }, cityTag && /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-citytag"
    }, cityTag), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-handwritten-title"
    }, nameZh), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-postcard-body"
    }, bodyLines.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, l, /*#__PURE__*/React.createElement("br", null)))), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-postcard-meta"
    }, metaTags.map((t, i) => /*#__PURE__*/React.createElement("span", {
      key: i
    }, t))));
  }
  if (variant === 'grid') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-hotel-grid ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-title"
    }, /*#__PURE__*/React.createElement("h3", null, nameZh), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-en"
    }, nameEn)), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-col-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-date-highlight"
    }, dateRange), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field-label"
    }, "\u4F4F\u5BBF"), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field-value"
    }, nights)), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field-label"
    }, "\u5165\u4F4F\u65F6\u95F4"), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field-value"
    }, checkIn))), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-col-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field-label"
    }, "\u623F\u578B"), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field-value"
    }, roomType)), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field-label"
    }, "\u5E8A\u578B / \u9762\u79EF"), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field-value"
    }, bedInfo)), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field-label"
    }, "\u65E9\u9910"), /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-field-value"
    }, breakfast))), note && /*#__PURE__*/React.createElement("div", {
      className: "ds-hotel-eg-footer"
    }, note));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-hotel-editorial ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-name-zh"
  }, nameZh), /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-name-en"
  }, nameEn), /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-label"
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-value"
  }, dateRange)), /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-label"
  }, "\u623F\u578B"), /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-value"
  }, roomType)), /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-label"
  }, "\u65E9\u9910"), /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-value"
  }, breakfast)), /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-label"
  }, "\u5165\u4F4F"), /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-detail-value"
  }, checkIn))), note && /*#__PURE__*/React.createElement("div", {
    className: "ds-hotel-note"
  }, note));
}
Object.assign(__ds_scope, { HotelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/travel/HotelCard.jsx", error: String((e && e.message) || e) }); }

// components/travel/TicketCard.jsx
try { (() => {
function TicketCard(props) {
  const {
    variant = 'vintage',
    flightNo,
    airline,
    date,
    fromCode,
    fromCity,
    toCode,
    toCity,
    depTime,
    arrTime,
    duration,
    aircraft,
    cls,
    meal,
    seat,
    className = '',
    style
  } = props;
  if (variant === 'editorial') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-ticket-editorial ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-top-line"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-flightno"
    }, flightNo, " \xB7 ", airline), /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-date"
    }, date)), /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-time-hero"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-time-big"
    }, depTime), /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-time-divider"
    }, "\u2192"), /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-time-big"
    }, arrTime)), /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-cities-line"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-city"
    }, fromCity, " ", /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-airport"
    }, fromCode)), /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-arrow"
    }, "\u2014"), /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-city"
    }, toCity, " ", /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-airport"
    }, toCode))), /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-meta-strip"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-meta-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, "Duration"), /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, duration)), /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-meta-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, "Aircraft"), /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, aircraft)), /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-meta-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, "Class"), /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, cls)), /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-meta-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, "Meal"), /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, meal))));
  }
  if (variant === 'minimal') {
    return /*#__PURE__*/React.createElement("div", {
      className: `ds-ticket-minimal ${className}`,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-min-header"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-min-airline"
    }, airline, " ", flightNo, " \xB7 ", date), /*#__PURE__*/React.createElement("span", {
      className: "ds-ticket-min-dot"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-min-route"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-min-point"
    }, /*#__PURE__*/React.createElement("span", {
      className: "time"
    }, depTime), /*#__PURE__*/React.createElement("span", {
      className: "code"
    }, fromCode, " ", fromCity)), /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-min-connector"
    }, /*#__PURE__*/React.createElement("div", {
      className: "line"
    }), /*#__PURE__*/React.createElement("span", {
      className: "duration"
    }, duration)), /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-min-point"
    }, /*#__PURE__*/React.createElement("span", {
      className: "time"
    }, arrTime), /*#__PURE__*/React.createElement("span", {
      className: "code"
    }, toCode, " ", toCity))), /*#__PURE__*/React.createElement("div", {
      className: "ds-ticket-min-footer"
    }, /*#__PURE__*/React.createElement("span", null, aircraft), /*#__PURE__*/React.createElement("span", null, cls), /*#__PURE__*/React.createElement("span", null, meal)));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `ds-ticket-vintage ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-airline-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-ticket-badge"
  }, flightNo), /*#__PURE__*/React.createElement("span", null, airline)), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-route-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-citycode"
  }, fromCode), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-cityname"
  }, fromCity)), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-routearrow"
  }, /*#__PURE__*/React.createElement("span", null, duration, " \u2708")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-citycode"
  }, toCode), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-cityname"
  }, toCity))), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-timerow"
  }, "DEP ", depTime, " \u2192 ARR ", arrTime), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-detailsrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-detailitem"
  }, /*#__PURE__*/React.createElement("label", null, "Aircraft"), /*#__PURE__*/React.createElement("span", null, aircraft)), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-detailitem"
  }, /*#__PURE__*/React.createElement("label", null, "Class"), /*#__PURE__*/React.createElement("span", null, cls)), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-detailitem"
  }, /*#__PURE__*/React.createElement("label", null, "Meal"), /*#__PURE__*/React.createElement("span", null, meal)))), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-stub"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-stub-label"
  }, "Date"), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-stub-date"
  }, date), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-stub-label"
  }, "Seat"), /*#__PURE__*/React.createElement("div", {
    className: "ds-ticket-stub-seat"
  }, seat)));
}
Object.assign(__ds_scope, { TicketCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/travel/TicketCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BookCard = __ds_scope.BookCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ChatBubbles = __ds_scope.ChatBubbles;

__ds_ns.CodePanel = __ds_scope.CodePanel;

__ds_ns.TypewriterSection = __ds_scope.TypewriterSection;

__ds_ns.CompareList = __ds_scope.CompareList;

__ds_ns.CompareTable = __ds_scope.CompareTable;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.Checklist = __ds_scope.Checklist;

__ds_ns.DarkReveal = __ds_scope.DarkReveal;

__ds_ns.FlipCard = __ds_scope.FlipCard;

__ds_ns.GalleryRail = __ds_scope.GalleryRail;

__ds_ns.HorizontalScrollCards = __ds_scope.HorizontalScrollCards;

__ds_ns.HoverRevealCard = __ds_scope.HoverRevealCard;

__ds_ns.StackedCards = __ds_scope.StackedCards;

__ds_ns.FlowSteps = __ds_scope.FlowSteps;

__ds_ns.FullBleedHero = __ds_scope.FullBleedHero;

__ds_ns.NewspaperLayout = __ds_scope.NewspaperLayout;

__ds_ns.RingSteps = __ds_scope.RingSteps;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.TimelineCards = __ds_scope.TimelineCards;

__ds_ns.AvatarCluster = __ds_scope.AvatarCluster;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.MoodCalendar = __ds_scope.MoodCalendar;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.Signature = __ds_scope.Signature;

__ds_ns.FilterTabs = __ds_scope.FilterTabs;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.TabSwitcher = __ds_scope.TabSwitcher;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.QuoteSection = __ds_scope.QuoteSection;

__ds_ns.ComicText = __ds_scope.ComicText;

__ds_ns.Highlighter = __ds_scope.Highlighter;

__ds_ns.KineticText = __ds_scope.KineticText;

__ds_ns.MorphingText = __ds_scope.MorphingText;

__ds_ns.PixelImage = __ds_scope.PixelImage;

__ds_ns.SparklesText = __ds_scope.SparklesText;

__ds_ns.SpinningText = __ds_scope.SpinningText;

__ds_ns.TypingText = __ds_scope.TypingText;

__ds_ns.HotelCard = __ds_scope.HotelCard;

__ds_ns.TicketCard = __ds_scope.TicketCard;

})();
