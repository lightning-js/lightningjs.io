# Lightning versus HTML DOM


When developing TV Apps, it is tempting to use a major HTML DOM-based framework that you are familiar with. But when you are targeting hardware with limited resources, this is usually not a good idea. When you try to run your Apps on a Smart TV or STB, you might encounter problems such as:

* Poor performance
* Memory leaks
* Out-of-memory crashes
* (In)stability issues


Lightning has the benefit of using *WebGL*, which means that it practically talks to the GPU *directly*. GPU memory usage is predictable at all times, and CPU memory usage is also more predictable if you are only dealing with *JavaScript heap memory* instead of HTML DOM Elements.


Besides the fact that the Lightning framework offers an amazing performance, it helps in understanding the performance of a page, which allows you to consider trade-offs for low-end devices.


The following contains an overview of well-known downsides of various applications of the HTML DOM framework:

* HTML DOM is a black box when it comes to memory and performance
* HTML DOM rendering is too slow
* Virtual DOM by itself is slow as well (unless you tune it to perfection)
* Lacks in terms of animations
* Less portable (some platforms only support web-based Apps)
* Lack of CPU performance optimization
* Lack of clarity about memory leaks and memory management
* Lack of vital features, such as a good layout engine and an animation engine
* Not a framework, only a Render Tree