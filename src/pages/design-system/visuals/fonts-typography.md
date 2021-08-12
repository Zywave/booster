---
title: Fonts and typography
subtitle: Typography guidelines help standardize our typeface styling, to improve the look and readability of product text.
permalink: '/design-system/visuals/{{ title | slug }}/'
eleventyComputed:
  eleventyNavigation:
    key: '{{ title }}'
    parent: Visuals
---

<!-- * [Developer documentation](https://gitlab.zywave.com/zui/zui-core/wikis/typography) -->

## Base font

<Grid>

<GridCol col="span-4">

Zywave uses system fonts for all text within our applications, including headlines, introductory text, body text and any components that contain text.  
With system fonts, page content can feel more like it belongs on your particular computer or device.  
[More information on system fonts](http://markdotto.com/2018/02/07/github-system-fonts/)

</GridCol>
<GridCol col="span-8">

| Font                                                                                           | Size(px) | Weight | Color        |
| :--------------------------------------------------------------------------------------------- | :------- | :----- | :----------- |
| <b>System fonts</b><ul><li>Segoe UI</li><li>-apple-system</li><li>BlinkMacSystemFont</li></ul> | 14px     | 400    | ZUI Gray 800 |

</GridCol>
</Grid>

---

## Headlines

<Grid>
<GridCol col="span-4">

We have 6 headline styles used throughout our applications. Though there isn’t a strict standard on appropriate headline usage, it’s essential to keep in mind that font weight and size are used to convey importance and bring hierarchy to a page.

**Note**: Our standard set of headline styles–featured in the supporting image--are paired with our default body copy. However, in certain circumstances, an application may use small or x-small body copy.

For more information, see [body copy](#body-copy).

</GridCol>
<GridCol col="span-8">

![Headlines examples](images/foundations/fonts-and-typography/headline_fonts.svg)

</GridCol>
</Grid>
<Spacer size="small" />

| Name               | Size(px) | Weight | Color        | Usage guidelines                                                                        |
| :----------------- | :------- | :----- | :----------- | :-------------------------------------------------------------------------------------- |
| Hero               | 32       | 300    | ZUI Gray 800 | Used sparingly, typically for welcoming the user to a new experience. ie. in step flows |
| H1 - First header  | 26       | 600    | ZUI Gray 800 | Used as the page title and modal title                                                  |
| H2 - Second header | 20       | 600    | ZUI Gray 800 | -                                                                                       |
| H3 - Third header  | 16       | 600    | ZUI Gray 800 | -                                                                                       |
| H4 - Fourth header | 14       | 700    | ZUI Gray 800 | -                                                                                       |
| H5 - Fifth header  | 12       | 700    | ZUI GRAY 800 | ALL CAPS                                                                                |

---

## Body copy

<Grid>
<GridCol col="span-4">

We have 3 defined body copy sizes used throughout our applications. Typically, default body copy is appropriate on-screen; however, you may wish to use small or x-small for special cases.

</GridCol>
<GridCol col="span-8">

![Body copy example](images/foundations/fonts-and-typography/body_copy.svg)

</GridCol>
</Grid>
<Spacer size="small" />

| Name    | Size(px) | Weight | Color        | Usage guidelines |
| :------ | :------- | :----- | :----------- | :--------------- |
| Default | 14       | 400    | ZUI Gray 800 | Base font        |
| Small   | 12       | 400    | ZUI Gray 800 | -                |
| X-small | 11       | 400    | ZUI Gray 800 | -                |

---

## Font weight

<Grid>
<GridCol col="span-4">

We have 4 font weights used throughout our applications. Though there isn’t a strict standard on appropriate font weight usage, it’s essential to keep in mind that font weight and size are used to convey importance and bring hierarchy to a page.

</GridCol>
<GridCol col="span-8">

![Font weight example](images/foundations/fonts-and-typography/font_weight.svg)

</GridCol>
</Grid>

---

## Line height

<Grid>
<GridCol col="span-4">

We use a standard 1.6 line height. We recommend using unit-less line heights because child elements will inherit the raw number value, rather than the computed value. With this, child elements can compute their line heights based on their computed font size, rather than inheriting an arbitrary value from a parent that is more likely to need overriding.

Font size is measured from the top of a capital letter (O) to the bottom of descending characters (p). Half the line height extends both up and down from the centerline of the text.

</GridCol>

<GridCol col="span-8">

![Line height example](images/foundations/fonts-and-typography/line_height.svg)

</GridCol>
</Grid>

---

## Line length

To optimize text readability, we recommend line lengths of at least 45 characters and no more than 75 characters.

![Line length example](images/foundations/fonts-and-typography/line_length.svg)
