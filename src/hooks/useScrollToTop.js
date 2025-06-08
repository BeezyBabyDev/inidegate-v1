import { useEffect } from 'react'

/**
 * Custom hook to automatically scroll to top when component mounts
 * @param {Object} options - Configuration options
 * @param {boolean} options.smooth - Whether to use smooth scrolling
 * @param {number} options.delay - Delay before scrolling (in ms)
 */
export const useScrollToTop = ({ smooth = false, delay = 0 } = {}) => {
  useEffect(() => {
    const scrollToTop = () => {
      if (smooth) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      } else {
        window.scrollTo(0, 0)
      }
    }

    if (delay > 0) {
      const timeoutId = setTimeout(scrollToTop, delay)
      return () => clearTimeout(timeoutId)
    } else {
      scrollToTop()
    }
  }, [smooth, delay])
}

/**
 * Function to manually scroll to top - can be called in event handlers
 * @param {boolean} smooth - Whether to use smooth scrolling
 */
export const scrollToTop = (smooth = false) => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  } else {
    window.scrollTo(0, 0)
  }
}

export default useScrollToTop 