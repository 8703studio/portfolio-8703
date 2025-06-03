'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/SplitText'

const Loader = () => {
  useEffect(() => {
    // Enregistrer les plugins GSAP
    gsap.registerPlugin(CustomEase, SplitText)
    CustomEase.create("custom", ".8, 0, .3, 1")

    const isMobile = window.innerWidth < 1000
    const sizes = {
      xOffset: isMobile ? "7.5rem" : "18rem",
      yOffset: isMobile ? "-1rem" : "-2.75rem",
      fontSizeOutro: isMobile ? "2.5rem" : "3.5rem"
    }

    // Fonction pour découper le texte
    const splitTextElements = (
      selector: string,
      type = "words,chars",
      addFirstChar = false
    ) => {
      const elements = document.querySelectorAll(selector)

      elements.forEach((element) => {
        const splitText = new SplitText(element, {
          type,
          wordsClass: "word",
          charsClass: "char",
        })

        if (type.includes("chars")) {
          splitText.chars.forEach((char, index) => {
            const originalText = char.textContent
            char.innerHTML = `<span>${originalText}</span>`

            if (addFirstChar && index === 0) {
              char.classList.add("first-char")
            }
          })
        }
      })
    }

    // Split du texte sur les différents éléments
    splitTextElements(".intro-title h1", "words,chars", true)
    splitTextElements(".outro-title h1", "words,chars")
    splitTextElements(".tag p", "words")

    // Réglages initiaux GSAP
    gsap.set(
      [
        ".split-overlay .intro-title .first-char span",
        ".split-overlay .outro-title .char span",
        ".tag p .word"
      ],
      { y: "0%" }
    )

    gsap.set(".split-overlay .intro-title .first-char", {
      x: sizes.xOffset,
      y: sizes.yOffset,
      fontWeight: "700",
      scale: 0.5,
    })

    gsap.set(".split-overlay .outro-title .char", {
      x: sizes.xOffset,
      fontSize: sizes.fontSizeOutro,
      fontWeight: "700",
    })

    // Timeline principale d’animation
    const tl = gsap.timeline({
      defaults: {
        ease: "custom",
        duration: 1.5,
      },
    })

    const tags = gsap.utils.toArray(".tag")

    // Animation des tags en entrée
    tags.forEach((tag, index) => {
      tl.to(
        tag.querySelector("p .word"),
        {
          y: "0%",
          duration: 1.5,
        },
        0.5 + index * 0.2
      )
    })

    // Animation intro-title (chars)
    tl.to(
      ".preloader .intro-title .char span",
      {
        y: "0%",
        duration: 1.5,
        stagger: 0.05,
      },
      0.5
    )
      .to(
        ".preloader .intro-title .char:not(.first-char) span",
        {
          y: "100%",
          duration: 1.5,
          stagger: 0.05,
        },
        2
      )
      .to(
        ".preloader .outro-title .char span",
        {
          y: "0%",
          duration: 1.5,
          stagger: 0.05,
        },
        2.5
      )
      .to(
        ".preloader .intro-title .first-char",
        {
          x: sizes.xOffset,
          duration: 1.5,
        },
        2.5
      )
      .to(
        ".preloader .outro-title .char",
        {
          x: sizes.xOffset,
          duration: 1.5,
        },
        3.5
      )
      .to(
        ".preloader .intro-title .first-char",
        {
          x: sizes.xOffset,
          y: sizes.yOffset,
          fontWeight: "700",
          scale: 0.5,
          duration: 1.5,
        },
        4.5
      )
      .to(
        ".preloader .outro-title .char",
        {
          x: sizes.xOffset,
          fontSize: sizes.fontSizeOutro,
          fontWeight: "500",
          duration: 1.5,
          onComplete: () => {
            gsap.set(".preloader", {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            })
            gsap.set(".split-overlay", {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            })
          },
        },
        5.5
      )

    // Animation des tags en sortie
    tags.forEach((tag, index) => {
      tl.to(
        tag.querySelector("p .word"),
        {
          y: "100%",
          duration: 1.5,
        },
        6 + index * 0.2
      )
    })

    // Sortie finale du loader
    tl.to(
      [".preloader", ".split-overlay"],
      {
        y: (index: number) => (index === 0 ? "-50%" : "50%"),
        duration: 1.5,
      },
      7.5
    )
  }, [])

  return (
    <div className="main-loader">
      {/* PRELOADER */}
      <div className="preloader fixed w-screen h-screen bg-sky-400 text-white z-20">
        <div className="intro-title absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h1>8703 STUDIO</h1>
        </div>
        <div className="outro-title absolute top-[50%] left-[calc(50%+5rem)] transform -translate-x-1/2 -translate-y-1/2">
          <h1>hello</h1>
        </div>
      </div>

      {/* SPLIT OVERLAY */}
      <div className="split-overlay fixed w-screen h-screen bg-sky-400 text-white z-10">
        <div className="intro-title absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h1>8703 STUDIO</h1>
        </div>
        <div className="outro-title absolute top-[50%] left-[calc(50%_+5rem)] transform -translate-x-1/2 -translate-y-1/2">
          <h1>hello</h1>
        </div>
      </div>

      {/* TAGS OVERLAY */}
      <div className="tags-overlay fixed w-screen h-screen z-20">
        <div className="tag max-content overflow-hidden">
          <div className="tag1 absolute top-[15%] left-[15%]">
            <p>test</p>
          </div>
          <div className="tag2 absolute">
            <p>why</p>
          </div>
          <div className="tag3 absolute">
            <p>not</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
