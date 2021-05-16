# Global styles

These files just provide us with sensible default styles for html tags, eg: typography, forms, and tables.

We should avoid styling with classes in these files as much as possible — most of the time anything requiring a class will be better to be built and styled as Vue components, rather than seperating the styles out into a different file.

Notable exceptions would be utility micro-classes. These should also be used pretty sparingly as they represent a fragile paradigm of using classes for individual CSS attributes, ie: a bad example might be `.font-weight-bold` because this only sets one property and would be better handled with a strong tag, whereas a better example would be `.accessibly-hidden` since this provides a more complex set of CSS rules representative of a more complex styling pattern.
