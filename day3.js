var color = 'purple';

var eye = document.querySelector('.r13.c21');
eye.style.backgroundColor = color;
var eye2 = document.getElementById('c23r13');
eye2.style.backgroundColor = color;
var nose = document.querySelector('.r15.c22');
nose.style.backgroundColor = color;

var m1 = document.querySelector('.r16.c20');
m1.style.backgroundColor = color;
var m2 = document.querySelector('.r17.c21');
m2.style.backgroundColor = color;
var m3 = document.querySelector('.r17.c22');
m3.style.backgroundColor = color;
var m4 = document.querySelector('.r17.c23');
m4.style.backgroundColor = color;
var m5 = document.querySelector('.r16.c24');
m5.style.backgroundColor = color;

var mouth = [m1, m2, m3, m4, m5]

var mouthColor = 'red';
mouth.forEach((item) => {
  item.style.backgroundColor = mouthColor;
});

var flag = [];
flag.push(
  document.querySelector('.r1.c60'),
  document.querySelector('.r1.c59'),
  document.querySelector('.r1.c58'),
  document.querySelector('.r1.c57'),
  document.querySelector('.r1.c56'),
  document.querySelector('.r1.c55'),
  document.querySelector('.r1.c54'),
  document.querySelector('.r1.c53'),
  document.querySelector('.r1.c52'),
  document.querySelector('.r1.c51'),
  document.querySelector('.r1.c50'),
  document.querySelector('.r2.c60'),
  document.querySelector('.r2.c59'),
  document.querySelector('.r2.c58'),
  document.querySelector('.r2.c57'),
  document.querySelector('.r2.c56'),
  document.querySelector('.r2.c55'),
  document.querySelector('.r2.c54'),
  document.querySelector('.r2.c53'),
  document.querySelector('.r2.c52'),
  document.querySelector('.r2.c51'),
  document.querySelector('.r2.c50'),
  document.querySelector('.r3.c60'),
  document.querySelector('.r3.c59'),
  document.querySelector('.r3.c58'),
  document.querySelector('.r3.c57'),
  document.querySelector('.r3.c56'),
  document.querySelector('.r3.c55'),
  document.querySelector('.r3.c54'),
  document.querySelector('.r3.c53'),
  document.querySelector('.r3.c52'),
  document.querySelector('.r3.c51'),
  document.querySelector('.r3.c50'),
  document.querySelector('.r4.c60'),
  document.querySelector('.r4.c59'),
  document.querySelector('.r4.c58'),
  document.querySelector('.r4.c57'),
  document.querySelector('.r4.c56'),
  document.querySelector('.r4.c55'),
  document.querySelector('.r4.c54'),
  document.querySelector('.r4.c53'),
  document.querySelector('.r4.c52'),
  document.querySelector('.r4.c51'),
  document.querySelector('.r4.c50'),
  document.querySelector('.r5.c60'),
  document.querySelector('.r5.c59'),
  document.querySelector('.r5.c58'),
  document.querySelector('.r5.c57'),
  document.querySelector('.r5.c56'),
  document.querySelector('.r5.c55'),
  document.querySelector('.r5.c54'),
  document.querySelector('.r5.c53'),
  document.querySelector('.r5.c52'),
  document.querySelector('.r5.c51'),
  document.querySelector('.r5.c50'),
  document.querySelector('.r6.c60'),
  document.querySelector('.r6.c59'),
  document.querySelector('.r6.c58'),
  document.querySelector('.r6.c57'),
  document.querySelector('.r6.c56'),
  document.querySelector('.r6.c55'),
  document.querySelector('.r6.c54'),
  document.querySelector('.r6.c53'),
  document.querySelector('.r6.c52'),
  document.querySelector('.r6.c51'),
  document.querySelector('.r6.c50'),
  document.querySelector('.r7.c60'),
  document.querySelector('.r7.c59'),
  document.querySelector('.r7.c58'),
  document.querySelector('.r7.c57'),
  document.querySelector('.r7.c56'),
  document.querySelector('.r7.c55'),
  document.querySelector('.r7.c54'),
  document.querySelector('.r7.c53'),
  document.querySelector('.r7.c52'),
  document.querySelector('.r7.c51'),
  document.querySelector('.r7.c50'),
  document.querySelector('.r8.c60'),
  document.querySelector('.r8.c59'),
  document.querySelector('.r8.c58'),
  document.querySelector('.r8.c57'),
  document.querySelector('.r8.c56'),
  document.querySelector('.r8.c55'),
  document.querySelector('.r8.c54'),
  document.querySelector('.r8.c53'),
  document.querySelector('.r8.c52'),
  document.querySelector('.r8.c51'),
  document.querySelector('.r8.c50'),
);

flag.forEach((pix) => {
  pix.style.backgroundColor = 'black';
});

var flagStars = [];
flagStars.push(
  document.getElementById('c51r2'),
  document.getElementById('c53r2'),
  document.getElementById('c52r3'),
  document.getElementById('c54r3'),
  document.getElementById('c51r4'),
  document.getElementById('c53r4'),
  document.getElementById('c52r5'),
  document.getElementById('c54r5'),
);
flagStars.forEach((star) => {
  star.style.backgroundColor = 'white';
});

var flagStripes = [];
flagStripes.push(
  document.querySelector('.c51.r7'),
  document.querySelector('.c52.r7'),
  document.querySelector('.c53.r7'),
  document.querySelector('.c54.r7'),
  document.querySelector('.c55.r7'),
  document.querySelector('.c56.r7'),
  document.querySelector('.c57.r7'),
  document.querySelector('.c58.r7'),
  document.querySelector('.c59.r7'),
  document.querySelector('.c56.r5'),
  document.querySelector('.c57.r5'),
  document.querySelector('.c58.r5'),
  document.querySelector('.c59.r5'),
  document.querySelector('.c56.r4'),
  document.querySelector('.c57.r4'),
  document.querySelector('.c58.r4'),
  document.querySelector('.c59.r4'),
  document.querySelector('.c56.r2'),
  document.querySelector('.c57.r2'),
  document.querySelector('.c58.r2'),
  document.querySelector('.c59.r2'),
);
flagStripes.forEach((stripe) => {
  stripe.style.backgroundColor = 'green';
});
