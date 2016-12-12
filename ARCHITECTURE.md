##### Intro
The aim is of this document is to define and explain core concepts of this software. Words or phrases that have a special meaning in this context are marked in **bold**. Most of them have their own paragraph explaining what they are.

##### Overview

Form builder is a usable tool to create or modify a **trees** of configurable [**elements**](#element). The (representation of) the current configuration of the tree is shown in a [**preview**](#preview). [**Elements**](#element) can be configured using a element configuration form. New [**elements**](#element) can be added from a palette (ie. by being drag & dropped).
At this point the **tree** as well as [**elements**](#element) are abstract things. Specific implementations can map this to different concepts ie:

| fb2 | webform | drupal form-API |
|---|---|---|
| Element | webform component | element array |
| Tree | a whole webform | a complete form-API structure |

##### Backend
The concept of a **tree** of configurable things is pretty generic. **Backends** map this concept to specific tasks. The implementation is responsible for:

* Defining [**blueprints**](#blueprint) and **palette groups**.
* Defining how element [**previews**](#preview) and **configuration forms** are rendered. (Either by calling an API or by implementing the rendering behaviour directly.)
* Defining which capabilities elements have.

##### Preview
The **preview** shows all [**elements**](#element) as they would be rendered (or as close as possible) based on their current configuration. For simplicity we assume that the **preview** of the whole tree can be composed of the previews of each individual element.

##### Element
An **element** is the basic unit of configuration. Each element is represented by it's [**preview**](#preview), it can be configured using it's configuration form and it may be moved around in the **tree**. Elements can contain other **elements**. Each individual element can have the following capabilities:

* **container**: The element can contain other elements.
* **removable**: The element can be removed from the tree.
* **movable**: The element's position in the tree can be changed.
* **configurable**: The element has a configuration form.

The capabilities of an element may change depending on the element configuration or based on the whole tree. The root of the **tree** can be treated as an **element** that is an unmovable, non-removable container.


##### Blueprint

**Blueprints** are „kinds of things that can be added to the tree”. Whenever a new [**element**](#element) is added to the tree the **blueprint** decides what it's initial configuration is.
Each **blueprint** can decide whether it's **addable** at any given time or not (depending on the current form configuration).

##### Palette
The **palette** shows all currently addable [**blueprints**](#blueprint). The blueprints might be arranged into **groups** (palette groups).

##### Session
All changes to the tree are temporary as long as the user does not explicitly save. This is needed so that we don't need the whole form to be consistent all the time during the editing session.
At the beginning of one editing **session** the current tree is loaded into JS / vue. When saving (explictly) the **tree** is saved to the server-side again.
All intermediate API calls (preview, configuration form) can be stateless: The JS-app sends the current configuration and the server provides the appropriate preview

##### Blueprints vs. element types
Element types imply that each element has a type and that the type never changes. While this concept is useful and can be used by a [**backend**](#backend) implementation it is not enforced by form builder so in theory elements that change their element type are possible (ie. donation amount textfield or select field).

