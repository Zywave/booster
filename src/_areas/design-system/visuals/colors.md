---
layout: documentation
title: Colors
subtitle:
---

## Color palette goals

- Create a cohesive look across the entire suite of products
- Meet AA standards for WCAG
- Shades to be based on percentages for ease of use within code
- Have a vibrant secondary palette for improved illustrations
- Consistent usage of one primary color throughout all products

---

## Primary Branding Colors

<div class="primary-branding-colors">
  <div class="primary-zywave">
    <div class="label">Zywave Green</div>
    <div class="hex">#5FB53B</div>
  </div>
  <div class="primary-blue">
    <div class="label">Blue 500</div>
    <div class="levels">
      <div class="hex">#2777d3</div>
      <div class="zui-blue">
        <div class="level-100">
          <div class="color"></div>
        </div>
        <div class="level-200">
          <div class="color"></div>
        </div>
        <div class="level-300">
          <div class="color"></div>
        </div>
        <div class="level-400">
          <div class="color"></div>
        </div>
        <div class="level-600">
          <div class="color"></div>
        </div>
        <div class="level-700">
          <div class="color"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="primary-content">
    <div class="primary-background">
      <div class="label">Background</div>
      <div class="hex">#f9f9fa</div>
    </div>
    <div class="primary-surface">
      <div class="label">Surface</div>
      <div class="hex">#ffffff</div>
    </div>
    <div class="primary-text zui-gray-800">
      <div class="label">Text</div>
      <div class="hex">#31313a</div>
    </div>
  </div>
</div>

**Zywave Green**  
Zywave green will remain our brand color to ensure continued recognition. However, the usage will be minimal within products. New usage guidelines should be put in place.

**Blue 500**  
All products will take on the Blue 500 creating a consistent look across our entire suite of products. This blue was chosen for a number of reasons

**Background, Surface and Text Colors**  
These colors will also be updated to match the new palette

- Background - Gray 50 or #F4F4F6
- Surface - White or #FFFFFF
- Text - Gray 800 or #31313A

---

## Expanded Color Palette

The expanded palette should be used in illustrations and other minor places throughout the UI that brings attention to certain elements. Meaning is assigned to certain colors that should be considered when using the color in illustrations and throughout the UI.

Gray is used in a variety of places throughout our products and is often used to create subtle variations in shade and therefore has a larger palette compared to the other secondary colors.

We have updated the color palette to use the HSL color system in order to maintain some of the saturation throughout each palette. With this update, only the lightness value will increase/decrease by 10% for each tint/shade of a color. Below are listed the HEX color values

<Grid>
  <GridCol col="span-9">
    <table class="zui-blue">
      <tr class="color-title">
        <td class="title" colspan="6">
          <h3>Blue</h3>
        </td>
      </tr>
      <tr class="header">
        <td>Level</td>
        <td class="color">Color</td>
        <td class="hex">HEX</td>
        <td class="hsl">HSL</td>
        <td class="rgb">RGB</td>
        <td>CSS variable</td>
      </tr>
      <tr class="level-50">
        <td>50</td>
        <td class="color"></td>
        <td class="hex">#E5EFFA</td>
        <td class="hsl">(212, 69%, 94%)</td>
        <td class="rgb">(229, 239, 250)</td>
        <td>--zui-blue-50</td>
      </tr>
      <tr class="level-100">
        <td>100</td>
        <td class="color"></td>
        <td class="hex">#D0E2F6</td>
        <td class="hsl">(212, 69%, 89%)</td>
        <td class="rgb">(208, 226, 246)</td>
        <td>--zui-blue-100</td>
      </tr>
      <tr class="level-200">
        <td>200</td>
        <td class="color"></td>
        <td class="hex">#A5C7EE</td>
        <td class="hsl">(212, 69%, 79%)</td>
        <td class="rgb">(165, 199, 238)</td>
        <td>--zui-blue-200</td>
      </tr>
      <tr class="level-300">
        <td>300</td>
        <td class="color"></td>
        <td class="hex">#79ACE6</td>
        <td class="hsl">(212, 69%, 69%)</td>
        <td class="rgb">(121, 172, 230)</td>
        <td>--zui-blue-300</td>
      </tr>
      <tr class="level-400">
        <td>400</td>
        <td class="color"></td>
        <td class="hex">#4E92DF</td>
        <td class="hsl">(212, 69%, 59%)</td>
        <td class="rgb">(78, 146, 223)</td>
        <td>--zui-blue-400</td>
      </tr>
      <tr class="level-500">
        <td>500</td>
        <td class="color"></td>
        <td class="hex">#2777D3</td>
        <td class="hsl">(212, 69%, 49%)</td>
        <td class="rgb">(39, 119, 211)</td>
        <td>--zui-blue-500</td>
      </tr>
      <tr class="level-600">
        <td>600</td>
        <td class="color"></td>
        <td class="hex">#1F5EA8</td>
        <td class="hsl">(212, 69%, 39%)</td>
        <td class="rgb">(31, 95, 168)</td>
        <td>--zui-blue-600</td>
      </tr>
      <tr class="level-700">
        <td>700</td>
        <td class="color"></td>
        <td class="hex">#17477D</td>
        <td class="hsl">(212, 69%, 29%)</td>
        <td class="rgb">(23, 71, 125)</td>
        <td>--zui-blue-700</td>
      </tr>
    </table>
</GridCol>

  <GridCol col="span-9">
    <table class="zui-green">
      <tr class="color-title">
        <td class="title" colspan="6">
          <h3>Green</h3>
        </td>
      </tr>
      <tr class="header">
        <td>Level</td>
        <td class="color">Color</td>
        <td class="hex">HEX</td>
        <td class="hsl">HSL</td>
        <td class="rgb">RGB</td>
        <td>CSS Variable</td>
      </tr>
      <tr class="level-100">
        <td>100</td>
        <td class="color"></td>
        <td class="hex">#B8E2A6</td>
        <td class="hsl">(102, 51%, 77%)</td>
        <td class="rgb">(215, 239, 205)</td>
        <td>--zui-green-100</td>
      </tr>
      <tr class="level-200">
        <td>200</td>
        <td class="color"></td>
        <td class="hex">#B8E2A6</td>
        <td class="hsl">(102, 51%, 77%)</td>
        <td class="rgb">(184, 226, 166)</td>
        <td>--zui-green-200</td>
      </tr>
      <tr class="level-300">
        <td>300</td>
        <td class="color"></td>
        <td class="hex">#9AD680</td>
        <td class="hsl">(102, 51%, 67%)</td>
        <td class="rgb">(154, 214, 128)</td>
        <td>--zui-green-300</td>
      </tr>
      <tr class="level-400">
        <td>400</td>
        <td class="color"></td>
        <td class="hex">#7BC959</td>
        <td class="hsl">(102, 51%, 57%)</td>
        <td class="rgb">(123, 201, 89)</td>
        <td>--zui-green-400</td>
      </tr>
      <tr class="level-500">
        <td>500</td>
        <td class="color"></td>
        <td class="hex">#5FB53B</td>
        <td class="hsl">(102, 51%, 47%)</td>
        <td class="rgb">(95, 181, 59)</td>
        <td>--zui-green-500</td>
      </tr>
      <tr class="level-600">
        <td>600</td>
        <td class="color"></td>
        <td class="hex">#4B8E2E</td>
        <td class="hsl">(102, 51%, 37%)</td>
        <td class="rgb">(75, 142, 46)</td>
        <td>--zui-green-600</td>
      </tr>
      <tr class="level-700">
        <td>700</td>
        <td class="color"></td>
        <td class="hex">#376822</td>
        <td class="hsl">(102, 51%, 27%)</td>
        <td class="rgb">(55, 104, 34)</td>
        <td>--zui-green-700</td>
      </tr>
    </table>
</GridCol>
</Grid>

<Grid>
  <GridCol col="span-9">
    <table class="zui-aqua">
      <tr class="color-title">
        <td class="title" colspan="6">
          <h3>Aqua</h3>
        </td>
      </tr>
      <tr class="header">
        <td>Level</td>
        <td class="color">Color</td>
        <td class="hex">HEX</td>
        <td class="hsl">HSL</td>
        <td class="rgb">RGB</td>
        <td>CSS Variable</td>
      </tr>
      <tr class="level-100">
        <td>100</td>
        <td class="color"></td>
        <td class="hex">#C6F0EE</td>
        <td class="hsl">(167, 59%, 86%)</td>
        <td class="rgb">(198, 240, 238)</td>
        <td>--zui-aqua-100</td>
      </tr>
      <tr class="level-200">
        <td>200</td>
        <td class="color"></td>
        <td class="hex">#9EE6E1</td>
        <td class="hsl">(167, 59%, 76%)</td>
        <td class="rgb">(158, 230, 225)</td>
        <td>--zui-aqua-200</td>
      </tr>
      <tr class="level-300">
        <td>300</td>
        <td class="color"></td>
        <td class="hex">#75DBD5</td>
        <td class="hsl">(167, 59%, 66%)</td>
        <td class="rgb">(117, 219, 213)</td>
        <td>--zui-aqua-300</td>
      </tr>
      <tr class="level-400">
        <td>400</td>
        <td class="color"></td>
        <td class="hex">#4DD1C8</td>
        <td class="hsl">(167, 59%, 56%)</td>
        <td class="rgb">(77, 209, 200)</td>
        <td>--zui-aqua-400</td>
      </tr>
      <tr class="level-500">
        <td>500</td>
        <td class="color"></td>
        <td class="hex">#30BBB1</td>
        <td class="hsl">(167, 59%, 46%)</td>
        <td class="rgb">(48, 187,177)</td>
        <td>--zui-aqua-500</td>
      </tr>
      <tr class="level-600">
        <td>600</td>
        <td class="color"></td>
        <td class="hex">#26928B</td>
        <td class="hsl">(167, 59%, 36%)</td>
        <td class="rgb">(38, 146, 139)</td>
        <td>--zui-aqua-600</td>
      </tr>
      <tr class="level-700">
        <td>700</td>
        <td class="color"></td>
        <td class="hex">#1B6964</td>
        <td class="hsl">(167, 59%, 26%)</td>
        <td class="rgb">(27, 105, 100)</td>
        <td>--zui-aqua-700</td>
      </tr>
    </table>
</GridCol>

  <GridCol col="span-9">
    <table class="zui-purple">
      <tr class="color-title">
        <td class="title" colspan="6">
          <h3>Purple</h3>
        </td>
      </tr>
      <tr class="header">
        <td>Level</td>
        <td class="color">Color</td>
        <td class="hex">HEX</td>
        <td class="hsl">HSL</td>
        <td class="rgb">RGB</td>
        <td>CSS Variable</td>
      </tr>
      <tr class="level-100">
        <td>100</td>
        <td class="color"></td>
        <td class="hex">#E0D7EF</td>
        <td class="hsl">(263, 42%, 89%)</td>
        <td class="rgb">(224, 215, 239)</td>
        <td>--zui-purple-100</td>
      </tr>
      <tr class="level-200">
        <td>200</td>
        <td class="color"></td>
        <td class="hex">#C4B3E0</td>
        <td class="hsl">(263, 42%, 79%)</td>
        <td class="rgb">(196, 179, 224)</td>
        <td>--zui-purple-200</td>
      </tr>
      <tr class="level-300">
        <td>300</td>
        <td class="color"></td>
        <td class="hex">#A88FD1</td>
        <td class="hsl">(263, 42%, 69%)</td>
        <td class="rgb">(168, 143, 209)</td>
        <td>--zui-purple-300</td>
      </tr>
      <tr class="level-400">
        <td>400</td>
        <td class="color"></td>
        <td class="hex">#8C6BC2</td>
        <td class="hsl">(263, 42%, 59%)</td>
        <td class="rgb">(140, 107, 194)</td>
        <td>--zui-purple-400</td>
      </tr>
      <tr class="level-500">
        <td>500</td>
        <td class="color"></td>
        <td class="hex">#6F48B0</td>
        <td class="hsl">(263, 42%, 49%)</td>
        <td class="rgb">(113, 72, 177)</td>
        <td>--zui-purple-500</td>
      </tr>
      <tr class="level-600">
        <td>600</td>
        <td class="color"></td>
        <td class="hex">#5A3A8D</td>
        <td class="hsl">(263, 42%, 39%)</td>
        <td class="rgb">(90, 58, 141)</td>
        <td>--zui-purple-600</td>
      </tr>
      <tr class="level-700">
        <td>700</td>
        <td class="color"></td>
        <td class="hex">#432B69</td>
        <td class="hsl">(263, 42%, 29%)</td>
        <td class="rgb">(67, 43, 105)</td>
        <td>--zui-purple-700</td>
      </tr>
    </table>
</GridCol>
</Grid>

<Grid>
  <GridCol col="span-9">
    <table class="zui-rose">
      <tr class="color-title">
        <td class="title" colspan="6">
          <h3>Rose</h3>
        </td>
      </tr>
      <tr class="header">
        <td>Level</td>
        <td class="color">Color</td>
        <td class="hex">HEX</td>
        <td class="hsl">HSL</td>
        <td class="rgb">RGB</td>
        <td>CSS Variable</td>
      </tr>
      <tr class="level-100">
        <td>100</td>
        <td class="color"></td>
        <td class="hex">#F3CEE5</td>
        <td class="hsl">(323, 60%, 88%)</td>
        <td class="rgb">(243, 206, 229)</td>
        <td>--zui-rose-100</td>
      </tr>
      <tr class="level-200">
        <td>200</td>
        <td class="color"></td>
        <td class="hex">#E9A5CF</td>
        <td class="hsl">(323, 60%, 78%)</td>
        <td class="rgb">(233, 165, 207)</td>
        <td>--zui-rose-200</td>
      </tr>
      <tr class="level-300">
        <td>300</td>
        <td class="color"></td>
        <td class="hex">#DE7CB9</td>
        <td class="hsl">(323, 60%, 68%)</td>
        <td class="rgb">(222, 124, 185)</td>
        <td>--zui-rose-300</td>
      </tr>
      <tr class="level-400">
        <td>400</td>
        <td class="color"></td>
        <td class="hex">#D454A3</td>
        <td class="hsl">(323, 60%, 58%)</td>
        <td class="rgb">(212, 84, 163)</td>
        <td>--zui-rose-400</td>
      </tr>
      <tr class="level-500">
        <td>500</td>
        <td class="color"></td>
        <td class="hex">#C6318C</td>
        <td class="hsl">(323, 60%, 48%)</td>
        <td class="rgb">(196, 49, 140)</td>
        <td>--zui-rose-500</td>
      </tr>
      <tr class="level-600">
        <td>600</td>
        <td class="color"></td>
        <td class="hex">#9B276E</td>
        <td class="hsl">(323, 60%, 38%)</td>
        <td class="rgb">(155, 39, 110)</td>
        <td>--zui-rose-600</td>
      </tr>
      <tr class="level-700">
        <td>700</td>
        <td class="color"></td>
        <td class="hex">#721D51</td>
        <td class="hsl">(323, 60%, 28%)</td>
        <td class="rgb">(114, 29, 81)</td>
        <td>--zui-rose-700</td>
      </tr>
    </table>
</GridCol>

  <GridCol col="span-9">
    <table class="zui-red">
      <tr class="color-title">
        <td class="title" colspan="6">
          <h3>Red</h3>
        </td>
      </tr>
      <tr class="header">
        <td>Level</td>
        <td class="color">Color</td>
        <td class="hex">HEX</td>
        <td class="hsl">HSL</td>
        <td class="rgb">RGB</td>
        <td>CSS Variable</td>
      </tr>
      <tr class="level-100">
        <td>100</td>
        <td class="color"></td>
        <td class="hex">#FAC9BD</td>
        <td class="hsl">(12, 85%, 86%)</td>
        <td class="rgb">(250, 201, 189)</td>
        <td>--zui-red-100</td>
      </tr>
      <tr class="level-200">
        <td>200</td>
        <td class="color"></td>
        <td class="hex">#F6A38E</td>
        <td class="hsl">(12, 85%, 76%)</td>
        <td class="rgb">(246, 163, 142)</td>
        <td>--zui-red-200</td>
      </tr>
      <tr class="level-300">
        <td>300</td>
        <td class="color"></td>
        <td class="hex">#F27C5F</td>
        <td class="hsl">(12, 85%, 66%)</td>
        <td class="rgb">(242, 124, 95)</td>
        <td>--zui-red-300</td>
      </tr>
      <tr class="level-400">
        <td>400</td>
        <td class="color"></td>
        <td class="hex">#EE562F</td>
        <td class="hsl">(12, 85%, 56%)</td>
        <td class="rgb">(238, 86, 47)</td>
        <td>--zui-red-400</td>
      </tr>
      <tr class="level-500">
        <td>500</td>
        <td class="color"></td>
        <td class="hex">#D93911</td>
        <td class="hsl">(12, 85%, 46%)</td>
        <td class="rgb">(217, 57, 18)</td>
        <td>--zui-red-500</td>
      </tr>
      <tr class="level-600">
        <td>600</td>
        <td class="color"></td>
        <td class="hex">#AA2D0E</td>
        <td class="hsl">(12, 85%, 36%)</td>
        <td class="rgb">(170, 45, 14)</td>
        <td>--zui-red-600</td>
      </tr>
      <tr class="level-700">
        <td>700</td>
        <td class="color"></td>
        <td class="hex">#7B200A</td>
        <td class="hsl">(12, 85%, 26%)</td>
        <td class="rgb">(123, 32, 10)</td>
        <td>--zui-red-700</td>
      </tr>
    </table>
</GridCol>
</Grid>

<Grid>
  <GridCol col="span-9">
    <table class="zui-orange">
      <tr class="color-title">
        <td class="title" colspan="6">
          <h3>Orange</h3>
        </td>
      </tr>
      <tr class="header">
        <td>Level</td>
        <td class="color">Color</td>
        <td class="hex">HEX</td>
        <td class="hsl">HSL</td>
        <td class="rgb">RGB</td>
        <td>CSS Variable</td>
      </tr>
      <tr class="level-100">
        <td>100</td>
        <td class="color"></td>
        <td class="hex">#FDE5D3</td>
        <td class="hsl">(25, 90%, 91%)</td>
        <td class="rgb">(253, 229, 211)</td>
        <td>--zui-orange-100</td>
      </tr>
      <tr class="level-200">
        <td>200</td>
        <td class="color"></td>
        <td class="hex">#FAC7A3</td>
        <td class="hsl">(25, 90%, 81%)</td>
        <td class="rgb">(250, 199, 163)</td>
        <td>--zui-orange-200</td>
      </tr>
      <tr class="level-300">
        <td>300</td>
        <td class="color"></td>
        <td class="hex">#F8AA72</td>
        <td class="hsl">(25, 90%, 71%)</td>
        <td class="rgb">(248, 170, 114)</td>
        <td>--zui-orange-300</td>
      </tr>
      <tr class="level-400">
        <td>400</td>
        <td class="color"></td>
        <td class="hex">#F58D42</td>
        <td class="hsl">(25, 90%, 61%)</td>
        <td class="rgb">(245, 141, 66)</td>
        <td>--zui-orange-400</td>
      </tr>
      <tr class="level-500">
        <td>500</td>
        <td class="color"></td>
        <td class="hex">#F36F12</td>
        <td class="hsl">(25, 90%, 51%)</td>
        <td class="rgb">(243, 111, 18)</td>
        <td>--zui-orange-500</td>
      </tr>
      <tr class="level-600">
        <td>600</td>
        <td class="color"></td>
        <td class="hex">#C7590A</td>
        <td class="hsl">(25, 90%, 41%)</td>
        <td class="rgb">(199, 89, 10)</td>
        <td>--zui-orange-600</td>
      </tr>
      <tr class="level-700">
        <td>700</td>
        <td class="color"></td>
        <td class="hex">#964308</td>
        <td class="hsl">(25, 90%, 31%)</td>
        <td class="rgb">(150, 67, 8)</td>
        <td>--zui-orange-700</td>
      </tr>
    </table>
</GridCol>

  <GridCol col="span-9">
    <table class="zui-yellow">
      <tr class="color-title">
        <td class="title" colspan="6">
          <h3>Yellow</h3>
        </td>
      </tr>
      <tr class="header">
        <td>Level</td>
        <td class="color">Color</td>
        <td class="hex">HEX</td>
        <td class="hsl">HSL</td>
        <td class="rgb">RGB</td>
        <td>CSS Variable</td>
      </tr>
      <tr class="level-100">
        <td>100</td>
        <td class="color"></td>
        <td class="hex">#FEF1D7</td>
        <td class="hsl">(40, 97%, 92%)</td>
        <td class="rgb">(254, 241, 215)</td>
        <td>--zui-yellow-100</td>
      </tr>
      <tr class="level-200">
        <td>200</td>
        <td class="color"></td>
        <td class="hex">#FEE0A5</td>
        <td class="hsl">(40, 97%, 82%)</td>
        <td class="rgb">(254, 224, 165)</td>
        <td>--zui-yellow-200</td>
      </tr>
      <tr class="level-300">
        <td>300</td>
        <td class="color"></td>
        <td class="hex">#FDCF72</td>
        <td class="hsl">(40, 97%, 72%)</td>
        <td class="rgb">(253, 207, 114)</td>
        <td>--zui-yellow-300</td>
      </tr>
      <tr class="level-400">
        <td>400</td>
        <td class="color"></td>
        <td class="hex">#FCBD40</td>
        <td class="hsl">(40, 97%, 62%)</td>
        <td class="rgb">(252, 189, 64)</td>
        <td>--zui-yellow-400</td>
      </tr>
      <tr class="level-500">
        <td>500</td>
        <td class="color"></td>
        <td class="hex">#FBAC0E</td>
        <td class="hsl">(40, 97%, 52%)</td>
        <td class="rgb">(251, 172, 14)</td>
        <td>--zui-yellow-500</td>
      </tr>
      <tr class="level-600">
        <td>600</td>
        <td class="color"></td>
        <td class="hex">#D38E03</td>
        <td class="hsl">(40, 97%, 42%)</td>
        <td class="rgb">(211, 142, 3)</td>
        <td>--zui-yellow-600</td>
      </tr>
      <tr class="level-700">
        <td>700</td>
        <td class="color"></td>
        <td class="hex">#A16C02</td>
        <td class="hsl">(40, 97%, 32%)</td>
        <td class="rgb">(161, 108, 2)</td>
        <td>--zui-yellow-700</td>
      </tr>
    </table>
</GridCol>
</Grid>

<Grid>
  <GridCol col="span-9">    <table class="zui-gray">
      <tr class="color-title">
        <td class="title" colspan="6">
          <h3>Gray</h3>
        </td>
      </tr>
      <tr class="header">
        <td>Level</td>
        <td class="color">Color</td>
        <td class="hex">HEX</td>
        <td class="hsl">HSL</td>
        <td class="rgb">RGB</td>
        <td>CSS Variable</td>
      </tr>
      <tr class="level-25">
        <td>25</td>
        <td class="color"></td>
        <td class="hex">#F9F9FA</td>
        <td class="hsl">(240, 8%, 98%)</td>
        <td class="rgb">(249, 249, 250)</td>
        <td>--zui-gray-25</td>
      </tr>
      <tr class="level-50">
        <td>50</td>
        <td class="color"></td>
        <td class="hex">#F4F4F6</td>
        <td class="hsl">(240, 8%, 96%)</td>
        <td class="rgb">(244, 244, 246)</td>
        <td>--zui-gray-50</td>
      </tr>
      <tr class="level-100">
        <td>100</td>
        <td class="color"></td>
        <td class="hex">#E6E6EA</td>
        <td class="hsl">(240, 8%, 91%)</td>
        <td class="rgb">(230, 230, 234)</td>
        <td>--zui-gray-100</td>
      </tr>
      <tr class="level-200">
        <td>200</td>
        <td class="color"></td>
        <td class="hex">#CBCBD2</td>
        <td class="hsl">(240, 8%, 81%)</td>
        <td class="rgb">(203, 203, 210)</td>
        <td>--zui-gray-200</td>
      </tr>
      <tr class="level-300">
        <td>300</td>
        <td class="color"></td>
        <td class="hex">#AFAFBB</td>
        <td class="hsl">(240, 8%, 71%)</td>
        <td class="rgb">(175, 175, 187)</td>
        <td>--zui-gray-300</td>
      </tr>
      <tr class="level-400">
        <td>400</td>
        <td class="color"></td>
        <td class="hex">#9494A4</td>
        <td class="hsl">(240, 8%, 61%)</td>
        <td class="rgb">(148, 148, 164)</td>
        <td>--zui-gray-400</td>
      </tr>
      <tr class="level-500">
        <td>500</td>
        <td class="color"></td>
        <td class="hex">#78788C</td>
        <td class="hsl">(240, 8%, 51%)</td>
        <td class="rgb">(120, 120, 140)</td>
        <td>--zui-gray-500</td>
      </tr>
      <tr class="level-600">
        <td>600</td>
        <td class="color"></td>
        <td class="hex">#606071</td>
        <td class="hsl">(240, 8%, 41%)</td>
        <td class="rgb">(96, 96, 113)</td>
        <td>--zui-gray-600</td>
      </tr>
      <tr class="level-700">
        <td>700</td>
        <td class="color"></td>
        <td class="hex">#494955</td>
        <td class="hsl">(240, 8%, 31%)</td>
        <td class="rgb">(73, 73, 85)</td>
        <td>--zui-gray-700</td>
      </tr>
      <tr class="level-800">
        <td>800</td>
        <td class="color"></td>
        <td class="hex">#31313A</td>
        <td class="hsl">(240, 8%, 21%)</td>
        <td class="rgb">(49, 49, 58)</td>
        <td>--zui-gray-800</td>
      </tr>
      <tr class="level-900">
        <td>900</td>
        <td class="color"></td>
        <td class="hex">#1A1A1E</td>
        <td class="hsl">(240, 8%, 11%)</td>
        <td class="rgb">(26, 26, 30)</td>
        <td>--zui-gray-900</td>
      </tr>
    </table>
</GridCol>
</Grid>

---

## Zywave Green Usage Guidelines

Zywave green still remains the main branding color of the company. It is how we've been recognized in the past and how we will continue to be recognized in the future. The way this color can be used within our products has changed, however, so that our products meet accessibility guidelines and we have more product branding consistency across all platforms.

**Where should I use Zywave Green?**

- Zywave logo
- Public-facing materials
- Anything, outside of our products, to be branded as Zywave

**How should I use Zywave Green?**

- As an accent color to highlight elements throughout a design
- For elements that do not contain text on top of the green color

**What should I avoid?**

- If possible, avoid using it for elements that contain text such as buttons or text boxes
  - _If you need to use it for an element with text, NEVER use a font smaller than 19px Bold or 24px Regular_
- Do not use for large elements that take up a lot of space on the page. Instead, use it as an accent color to draw attention to certain elements.

<Grid>

<GridCol col="span-6">

![do image](images/foundations/colors/zywave_Green_Do.svg)

<Do />

  </GridCol>

  <GridCol col="span-6">

![do not image](images/foundations/colors/zywave_Green_Dont.svg)

<DoNot />

</GridCol>
</Grid>

---

## Blue Usage Guidelines

Blue 500 will take over as the branding color within all of our products.

**Where should I use Blue 500?**  
The following components will adopt the blue color within our products. This list will change as ZUI continues to evolve.

- App Bar
- Buttons and text links
- Progress indicators
- Date pickers
- Radio buttons
- Tabs
- Pagination
- Popovers

**How should I use it?**

- As the main color used within our suite of products
- To create a visual hierarchy within the UI and attract users to their next action

**What should I avoid?**

- Using it for large elements that take up a lot of space on the page. Instead, it should be used as an accent color to draw attention to elements and guide the user through different pages.
- Creating a "sea of blue" by highlighting too many actions on one page.

---

## Color accessibility

ALL text on a colored background should meet a minimum of AA standards. Refer to the guidelines below for usage of GRAY 800 and WHITE text on each color.
The pass/fail rating is the same when using colored text on a WHITE or GRAY 800 background.

Small text = 19px/1.2em bold or smaller - **OR** - 24px/1.5em regular or smaller  
Large text = 19px/1.2em bold or larger - **OR** - 24px1.5em regular or larger

**Zywave Green**

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-zywave">
<div class="color">
<div>
<div class="a large bold">A</div>
<div class="rating">Pass</div>
</div>
<div>
<div class="a small">A</div>
<div class="rating">Fail</div>
</div>
<div>
<div class="a large bold white">A</div>
<div class="rating">Pass</div>
</div>
<div>
<div class="a small white">A</div>
<div class="rating">Pass</div>
</div>
</div>
<div class="details">
Zywave Green
<div class="hex">#5FB53B</div>
</div>
</div>

</GridCol>
</Grid>

<Spacer size="small"/></Spacer>

### Blue

The color blue is primarily used to guide the user throughout the UI. It is often used to share information or general notifications as well. Since Blue 500 is our primary product color it will be used frequently throughout many different components. Follow the Blue usage guidelines.

<Grid>
<GridCol col="span-3">
  <div class="a11y-swatch zui-blue-50">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Blue 50
    <div class="hex">#E5EFFA</div>
  </div>
</div>
</GridCol>

<GridCol col="span-3">
<div class="a11y-swatch zui-blue-100">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Blue 100
    <div class="hex">#D0E2F6</div>
  </div>
</div>
</GridCol>

<GridCol col="span-3">
<div class="a11y-swatch zui-blue-200">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Blue 200
    <div class="hex">#A5C7EE</div>
  </div>
</div>

</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-blue-300">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Blue 300
    <div class="hex">#79ACE6</div>
  </div>
</div>

</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-blue-400">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Blue 400
    <div class="hex">#4E92DF</div>
  </div>
</div>

</GridCol>
</Grid>

<br>

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-blue-500">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Blue 500
    <div class="hex">#2777D3</div>
  </div>
</div>

</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-blue-600">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Blue 600
    <div class="hex">#1F5EA8</div>
  </div>
</div>

</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-blue-700">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Blue 700
    <div class="hex">#17477D</div>
  </div>
</div>

</GridCol>
</Grid>

<Spacer size="small" />

### Green

Green means success! It should be used to notify the user that they have completed something successfully.

Green 500 will often appear in components such as notifiers, wells and dialogues. It will also frequently appear in icons/illustrations to confirm that something was successful.

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-green-100">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Green 100
    <div class="hex">#d7efcd</div>
  </div>
</div>
</GridCol> 
<GridCol col="span-3">
<div class="a11y-swatch zui-green-200">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Green 200
    <div class="hex">#b8e2a6</div>
  </div>
</div>

</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-green-300">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Green 300
    <div class="hex">#9ad680</div>
  </div>
</div>

</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-green-400">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Green 400
    <div class="hex">#7bc959</div>
  </div>
</div>

</GridCol>
</Grid>

<br>

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-green-500">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Green 500
    <div class="hex">#5fb53b</div>
  </div>
</div>

</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-green-600">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Green 600
    <div class="hex">#4b8e2e</div>
  </div>
</div>

</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-green-700">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Green 700
    <div class="hex">#376822</div>
  </div>
</div>
</GridCol>
</Grid>

<Spacer size="small" />

### Aqua

Often associated with feelings such as refreshing, energy, sophistication and creativity, Aqua can be used in illustrations or as an accent color to add a bright splash of color and lightness.

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-aqua-100">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Aqua 100
    <div class="hex">#c6f0ee</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-aqua-200">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Aqua 200
    <div class="hex">#9ee6e1</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-aqua-300">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Aqua 300
    <div class="hex">#7cddd6</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-aqua-400">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Aqua 400
    <div class="hex">#4d1c8</div>
  </div>
</div>
</GridCol>
</Grid>

<br>

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-aqua-500">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Aqua 500
    <div class="hex">#30bbb1</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-aqua-600">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Aqua 600
    <div class="hex">#26928b</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-aqua-700">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Aqua 700
    <div class="hex">#1b6964</div>
  </div>
</div>
</GridCol>
</Grid>

<Spacer size="small" />

### Purple

Purple's primary placement in our products will be visited text links. However, it can also be used within illustrations/icons to add depth or a rich pop of color. Purple is often associated with royalty, power and wealth.

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-purple-100">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Purple 100
    <div class="hex">#e0d7ef</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-purple-200">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Purple 200
    <div class="hex">#C4B3E0</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-purple-300">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Purple 300
    <div class="hex">#A88FD1</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-purple-400">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Purple 400
    <div class="hex">#8C6BC2</div>
  </div>
</div>
</GridCol>
</Grid>

<br>

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-purple-500">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Purple 500
    <div class="hex">#6F48B0</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-purple-600">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Purple 600
    <div class="hex">#5A3A8D</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-purple-700">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Purple 700
    <div class="hex">#432B69</div>
  </div>
</div>
</GridCol>
</Grid>

<Spacer size="small" />

### Rose

Often viewed as very feminine, pink can be used to add softness/playfulness to illustrations and icons.

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-rose-100">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Rose 100
    <div class="hex">#F3CEE5</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-rose-200">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Rose 200
    <div class="hex">#E9A5CF</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-rose-300">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Rose 300
    <div class="hex">#DE7CB9</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-rose-400">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Rose 400
    <div class="hex">#D454A3</div>
  </div>
</div>
</GridCol>
</Grid>

<br>

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-rose-500">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Rose 500
    <div class="hex">#C6318C</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-rose-600">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Rose 600
    <div class="hex">#9B276E</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-rose-700">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Rose 700
    <div class="hex">#721D51</div>
  </div>
</div>
</GridCol>
</Grid>

<Spacer size="small" />

### Red

Red is primarily used to signify some sort of error or destructive action. It is used to draw the users' attention to important information that could possibly disrupt their workflow.

The color RED 500 is used in components like notifiers, wells, dialogues, text links and buttons.

The meaning behind the color red should be highly considered when using it within any illustrations.

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-red-100">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Red 100
    <div class="hex">#FAC9BD</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-red-200">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Red 200
    <div class="hex">#F6A38E</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-red-300">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Red 300
    <div class="hex">#F27C5F</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-red-400">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Red 400
    <div class="hex">#EE562F</div>
  </div>
</div>
</GridCol>
</Grid>

<br>

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-red-500">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Red 500
    <div class="hex">#D93911</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-red-600">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Red 600
    <div class="hex">#AA2D0E</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-red-700">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Red 700
    <div class="hex">#7B200A</div>
  </div>
</div>
</GridCol>
</Grid>

<Spacer size="small" />

### Orange

Orange radiates warmth and happiness. It is a very energizing color and it is often associated with creativity, balance and health.

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-orange-100">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Orange 100
    <div class="hex">#FDE5D3</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-orange-200">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Orange 200
    <div class="hex">#FAC7A3</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-orange-300">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Orange 300
    <div class="hex">#F8AA72</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-orange-400">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Orange 400
    <div class="hex">#F58D42</div>
  </div>
</div>
</GridCol>
</Grid>

<br>

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-orange-500">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Orange 500
    <div class="hex">#F36F12</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-orange-600">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Orange 600
    <div class="hex">#C7590A</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-orange-700">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Orange 700
    <div class="hex">#964308</div>
  </div>
</div>
</GridCol>
</Grid>

<Spacer size="small" />

### Yellow

Yellow indicates a warning. It is used to draw the user's attention to caution them before they proceed. It can also be used to inform users that a change has been made on their behalf.

Yellow 500 can be found in components like wells, dialogues and notifiers.

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-yellow-100">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Yellow 100
    <div class="hex">#FEF1D7</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-yellow-200">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div> 
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Yellow 200
    <div class="hex">#FEE0A5</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-yellow-300">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Yellow 300
    <div class="hex">#FDCF72</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-yellow-400">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Yellow 400
    <div class="hex">#FCBD40</div>
  </div>
</div>
</GridCol>
</Grid>

<br>

<Grid>
<GridCol col="span-3">
<div class="a11y-swatch zui-yellow-500">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Yellow 500
    <div class="hex">#FBAC0E</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-yellow-600">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Fail</div>
    </div>
  </div>
    <div class="details">
    Yellow 600
    <div class="hex">#D38E03</div>
  </div>
</div>
</GridCol>
<GridCol col="span-3">
<div class="a11y-swatch zui-yellow-700">
  <div class="color">
    <div>
      <div class="a large bold">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a small">A</div>
      <div class="rating">Fail</div>
    </div>
    <div>
      <div class="a large bold white">A</div>
      <div class="rating">Pass</div>
    </div>
    <div>
      <div class="a small white">A</div>
      <div class="rating">Pass</div>
    </div>
  </div>
    <div class="details">
    Yellow 700
    <div class="hex">#A16C02</div>
  </div>
</div>
</GridCol>
</Grid>

---

## Color meanings

Certain colors will have meanings assigned to them. These meanings should be considered when using the color in any illustrations or marketing materials as well.

|                                                          | Color      | Meanings associated with color               | Where is it used in the UI?                                                                                                                                            |
| :------------------------------------------------------- | :--------- | :------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Red 500](images/foundations/colors/Red_500.svg)       | Red 500    | Error, Delete, Failed                        | <ul><li> Error/Failure wells, dialogs and notifiers</li><li>System icons or illustrations indicating error/delete/failure</li><li>Delete button or link</li></ul>      |
| ![Green 500](images/foundations/colors/Green_500.svg)   | Green 500  | Success, Confirm                             | <ul><li>Success wells, dialogs, notifiers</li><li>Confirm wells, dialogs, notifiers</li><li>System icons or illustrations indicating success or confirm</li></ul>      |
| ![Yellow 500](images/foundations/colors/Yellow_500.svg) | Yellow 500 | Caution, Warning, Change(s) made             | <ul><li>Caution/warning wells, dialogs, notifiers</li><li>Wells, dialogs, notifiers indicating a change has been made on the users' behalf</li></ul>                   |
| ![Blue 500](images/foundations/colors/Blue_500.svg)     | Blue 500   | Information, notification, link, in-progress | <ul><li>Information wells, dialogs, notifiers </li><li>Icons or illustrations used to inform the user or signify something is in progress</li><li>Text links</li></ul> |
| ![Gray 200](images/foundations/colors/Gray_200.svg)     | Gray 200   | Disabled/Unavailable                         | <ul><li>Disabled buttons or links</li><li>unavailable items in a dropdown selector</li></ul>                                                                           |
| ![Purple 500](images/foundations/colors/Purple_500.svg) | Purple 500 | Visited link                                 | <ul><li>Visited links</li></ul>                                                                                                                                        |
