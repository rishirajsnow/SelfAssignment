1. Using CSS position property

#parentContainer{
    position:relative;
}

#childContainer{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%)
}

2.

#parentContainer {
  position: relative;
}
#childContainer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
3.

#parentContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

4. How to Use Flexbox, justify-content, and align-self

#parentContainer {
  display: flex;
  justify-content: center;
}
#childContainer {
  align-self: center;
}

5.
#parentContainer {
  display: flex;
}
#childContainer {
  margin: auto;
}

6.

#parentContainer {
  display: grid;
  justify-content: center;
  align-items: center;
}

7.
#parentContainer {
  display: grid;
  place-items: center;
}

8.

#parentContainer {
  display: grid;
}
#childContainer {
  align-self: center;
  justify-self: center;
}


9.
#parentContainer {
  display: grid;
}
#childContainer {
  place-self: center;
}

10.
#parentContainer {
  display: grid;
}
#childContainer {
  margin: auto;
}


Summary
In this article, we saw how to center a div using 10 different methods. Those methods were:

Using position: relative, absolute and top, left offset values
Using position: relative and absolute, top, left, right and bottom offset values and margin: auto
Using flexbox, justify-content and align-item
Using flexbox, justify-content and align-self
Using flexbox and margin: auto
Using grid, justify-content and align-items
Using grid and place-items
Using grid, align-self and justify-self
Using grid and place-self
Using grid and margin: auto
We also looked at what all these properties like justify-content, align-items, position and so on meant and how we can use some of them together to center our divs.

