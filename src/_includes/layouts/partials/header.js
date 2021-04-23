module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode('siteHeader', function() {

    return /*html*/ `
    <header class="font-sans font-extrabold">
      <nav
        class="flex items-center bg-black dark:bg-blue-700 justify-between flex-wrap px-6 py-2 lg:py-0 fixed w-full z-10 top-0"
        x-data="{ isOpen: false }"
        @keydown.escape="isOpen = false"
      >
        <!--Logo etc-->
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a
            class="text-white no-underline border-0 hover:border-0 hover:text-white hover:no-underline" 
            href="/"
          >
            <span class="pl-2">
              Link to home page
            </span>
          </a>
        </div>

        <!--Toggle button (hidden on large screens)-->
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block lg:hidden px-2 text-white hover:text-gray-200 focus:outline-none focus:text-white"
          :class="{ 'transition transform-180': isOpen }"
          aria-label="Open mobile menu"
        >
          <svg
            class="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              x-show="isOpen"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              x-show="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>

        <!--Menu-->
        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto" 
          :class="{ 'block shadow-3xl': isOpen, 'hidden': !isOpen }"
          @click.away="isOpen = false"
          x-show.transition="true"
        >
          <ul
            class="pt-0 list-reset lg:flex justify-end flex-1 items-center text-right list-none"
          >
            <li class="text-lg lg:text-sm py-0 my-4 font-bold lg:tracking-[0.25em] lg:uppercase">
              <a
                class="inline-block py-0 px-4"
                href="/about"
                @click="isOpen = false"
                >About
              </a>
            </li>
            <li class="text-lg lg:text-sm py-0 my-4 font-bold lg:tracking-[0.25em] lg:uppercase">
              <a
                class="inline-block py-0 px-4"
                href="/posts"
                @click="isOpen = false"
                >Posts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    `

  })

}