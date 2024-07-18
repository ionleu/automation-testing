## Architecture

Following architecture seems more appropriate for having on automation side, that is inspired from [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) and single-responsibility principle. This will allow us to have a structured project architecture that will be easy to understand and navigate.

    outputs
    docs
    	best-practices
    src
    	/configs
    	/specs
    		/regression
    		/smoke
    	/common
    		/page-objects
    			/pages
    			/elements
    			/fragments
    		/constants
    			/enums
    		/definitions
    			/interfaces
    			/types
    		/fixtures
    		/data
    		/utils
