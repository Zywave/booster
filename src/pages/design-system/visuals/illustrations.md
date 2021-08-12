---
title: Illustrations
permalink: '/design-system/visuals/{{ title | slug }}/'
eleventyComputed:
  eleventyNavigation:
    key: '{{ title }}'
    parent: Visuals
---

<center>

![hero illustration example](images/foundations/illustrations/loading.svg)

</center>

Our illustrations are broken into two main categories: hero illustrations and spot illustrations.
Regardless of the type, the answer to these 3 questions should always be yes.

<br/>

**Is it thoughtful?**

The purpose of our illustrations is to draw attention to a specific portion of the UI. They should be informative and add clarity to the content they were designed for.

<br/>

**Is it focused?**

Our illustrations contain a single subject. Each design should have one focal point and have a clear visual hierarchy of supporting elements that support one main topic.

<br/>

**Is it professional and fun?**

Our illustrations are relatable and add a human element to our otherwise very clean and professional UI. Characters in our illustrations add an element of fun and convey emotion.

<Spacer />

<Tabs :tabs="['Hero illustrations', 'Spot illustrations']">
<TabPage>

## Hero illustrations

Hero illustrations are our most complex visuals. The main purpose of these illustrations is to add weight to an element on the page and support the content they are related to. These large-scale images should be reserved for when you need to guide a user through a UI, prevent frustration, complete an experience, or reward/delight a user. They are not only larger than our spot illustrations, but also more saturated with color.

<br/>
<br/>

### Hero illustration anatomy

- Organic gray background shape
- **Must** contain the following: Human illustration and some sort of accompanying background element: ie. a computer or bookshelf
- **May** contain the following: animals, decorative flair, stylized imagery

These illustrations can vary in size depending on the location they are designed for, but a good rule of thumb is to never make them smaller than 200x200px and generally no larger than 600x400px for full-page landscape illustrations.

We are continually building a library of pieces that can be combined to create hero illustrations. Whether you start from scratch or build an illustration using this library, you should be creating them in a way that the final output can inherit agency branding if applicable. To do so, use one base color for the primary elements in the illustration and apply opaque black and white layers on top to create the necessary shades.
<br/>
<br/>

### Hero illustration example

This example shows what it looks like when the base color is changed on the pieces that make up the illustration.

<Grid>
<GridCol col="span-6">

![hero illustration blue](images/foundations/illustrations/hero-blue.svg)

</GridCol >
<GridCol col="span-6">

![hero illustration orange](images/foundations/illustrations/hero-orange.svg)

</GridCol >
</Grid>

</TabPage>
<TabPage>

## Spot illustrations

Spot illustrations are a simplified version of our hero illustrations that can be used anywhere that needs more visual interest than our system icons can provide. These illustrations fall between the hero illustrations and system icons in our visual hierarchy. Spot illustrations can greatly improve the user experience by visually explaining a complex feature, introducing new concepts, and delighting our users.

Spot illustrations are typically found within empty states, introduction screens, dashboard modules, confirmation screens, and error pages. They are used to fill empty space and quickly convey a message to the user that could otherwise be easily overlooked.

<br/>
<br/>

### Spot illustration anatomy

- Organic gray background shape
- Grayscale core illustration
- Colored supplementary illustration

The core illustration is primarily line art, but uses 3 values (dark, midtone and white) to convey depth.  
The supplementary illustration is always located in the lower right corner. While these illustrations are colored the different shades are created by using opaque black and white on top of one solid color shape. This allows the final illustrations in our products inherit agency branding where applicable.
<br/>
<br/>

### Spot illustration examples

<Grid>
<GridCol col="span-4">

![spot illustration compliance calendar](images/foundations/illustrations/spot-calendar.svg)

</GridCol >
<GridCol col="span-4">

![spot illustration fmla tool](images/foundations/illustrations/spot-fmla.svg)

</GridCol >
<GridCol col="span-4">

![spot illustration phone interview question builder](images/foundations/illustrations/spot-phone.svg)

</GridCol>
</Grid>

</TabPage>
</Tabs>
