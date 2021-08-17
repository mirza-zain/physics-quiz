//creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "If F=3i and d=6j.the work done will be?",
        answer: "zero",
        options: [
            "zero",
            "2",
            "9",
            "18",
        ]
    },
    {
        numb: 2,
        question: "Beats are produced due to ____",
        answer: "Interference of wave in time",
        options: [
            "Diffraction of waves in time",
            "Reflection of waves in time",
            "Polarization of waves in time",
            "Interference of wave in time",
        ]
    },
    {
        numb: 3,
        question: "The wave from of waves will be spherical when the rays of lights are:",
        answer: "not parallel",
        options: [
            "parallel",
            "perpendicular",
            "not parallel",
            "monochromatic",
        ]
    },
    {
        numb: 4,
        question: "If 'F' be the limitting friction and R be the normal reaction, then the co-efficient of static friction will be equal to:",
        answer: "F/R",
        options: [
            "F/R",
            "FR",
            "R/F",
            "1/FR",
        ]
    },
    {
        numb: 5,
        question: "The dimensions of G'g are:",
        answer: "M L1 T-2",
        options: [
            "M-1 L2 T2",
            "M L1 T-2",
            "M-1 L2 T",
            "M1 L2 T2",
        ]
    },
    {
        numb: 6,
        question: "The magnitude of resulantant of two forces of magnitudes 2N and 10N cannot be:",
        answer: "4N",
        options: [
            "6N",
            "5N",
            "4N",
            "3N",
        ]
    },
    {
        numb: 7,
        question: "If a body moves in a circle, then the angle subtented at the centre of circle by as are equals to twice of it's radius will be: ",
        answer: "114.6`",
        options: [
            "2`",
            "57.3`",
            "80`",
            "114.6`",
        ]
    },
    {
        numb: 8,
        question: "In a spectrometer, the focal length of convex lens is equal to length of it's:",
        answer: "collimator",
        options: [
            "obstacles",
            "collimator",
            "turntable",
            "telescope",
        ]
    },
    {
        numb: 9,
        question: "The point which describes the motion of the whole system or body is known as the:",
        answer: "centre of mass",
        options: [
            "centre of mass",
            "inertia",
            "moment of inertia",
            "centre gravity",
        ]
    },
    {
        numb: 10,
        question: "The product of frequency and time period is:",
        answer: "1",
        options: [
            "2",
            "3",
            "4",
            "1",
        ]
    },
    {
        numb: 11,
        question: "When a transverse wave travelling through a rare medium is reflected from a dense medium, then phase change produced in it will be equal to:",
        answer: "180`",
        options: [
            "360`",
            "90`",
            "180`",
            "0`",
        ]
    },
    {
        numb: 12,
        question: "The gravitional constant was determined experimently by:",
        answer: "Cavendish",
        options: [
            "Newton",
            "Cavendish",
            "Maxwell",
            "Elinstein",
        ]
    },
    {
        numb: 13,
        question: "A projectile is thrown upward with a certain velocity, it's time of flight will be minimum, if it is launched at an angle of:",
        answer: "30`",
        options: [
            "30`",
            "45`",
            "60`",
            "75`",
        ]
    },
    {
        numb: 14,
        question: "(i*j)*(j*i) is:",
        answer: "-1",
        options: [
            "k",
            "1",
            "-1",
            "zero",
        ]
    },
    {
        numb: 15,
        question: "Two forces which are equal in magnitude but opposite in direction and not acting along the same straight line form a:",
        answer: "couple",
        options: [
            "power",
            "couple",
            "circle",
            "torque",
        ]
    },
    {
        numb: 16,
        question: "If the time interval is very small (Δt -> 0), the rate of change of velocity of a body is called:",
        answer: "Instantaneous acceleration",
        options: [
            "Average acceleration",
            "Acceleration",
            "Instantaneous acceleration",
            "Constant acceleration",
        ]
    },
    {
        numb: 17,
        question: "Weber Fechner law is:",
        answer: "L α log I",
        options: [
            "I α log L",
            "L α log I",
            "I α I/log L",
            "I α log L",
        ]
    },
    {
        numb: 18,
        question: "When the temperature of air rises, the speed of sound waves increases because:",
        answer: "The wavelength of wave increases",
        options: [
            "The frequency of wave increases",
            "The wavelength of wave increases",
            "Both the frequency and wavelength increases ",
            "Neither of them increases",
        ]
    },
    {
        numb: 19,
        question: "The experimental evidence of transverse nature of light is:",
        answer: "polarization",
        options: [
            "polarization",
            "dispersion",
            "diffraction",
            "interference",
        ]
    },
    {
        numb: 20,
        question: "A lens of linear magnification 3 is placed between an object and a fixed screen.If the size of the image obtained is 6cm, the size of the object will be:",
        answer: "2cm",
        options: [
            "0.5cm",
            "3cm",
            "2cm",
            "18cm",
        ]
    },
    {
        numb: 21,
        question: "A bullet is fired horizontally with 20m/s.In the absence of air friction, it's horizontal velocity component after 2s will be:",
        answer: "20m/s",
        options: [
            "40m/s",
            "10m/s",
            "5m/s",
            "20m/s",
        ]
    },
    {
        numb: 22,
        question: "The angular momentum of a particle moving in a circle is conserved if:",
        answer: "net torque acting on the particle is zero",
        options: [
            "net force acting on the particle is zero",
            "net angular displacement of the particle is zero",
            "net torque acting on the particle is zero",
            "the acceleration of the particle is zero",
        ]
    },
    {
        numb: 23,
        question: "If the velocity of a body is doubled and the mass is reduced to one fourth of it's initial value, the kinetic energy will be:",
        answer: "remain the same",
        options: [
            "remain the same",
            "become four-fold",
            "become halved",
            "be doubled",
        ]
    },
    {
        numb: 24,
        question: "An object is falling through a viscous fluid with terminal velocity.It's velocity",
        answer: "remains constant",
        options: [
            "is decreasing",
            "is increasing",
            "remains constant",
            "becomes zero",
        ]
    },
    {
        numb: 25,
        question: "A force of 8N is applied to the spanner perpendicularly at a distance of 0.15m from the centre of the nut, the moment of the force acting on the nut is",
        answer: "1.2 N.m",
        options: [
            "1.5 N.m",
            "1.2 N.m",
            "3 N.m",
            "2.1 N.m",
        ]
    },
    {
        numb: 26,
        question: "Artifical gravity in soacecraft can be created by",
        answer: "spin motion",
        options: [
            "vibratory motion",
            "translatory motion",
            "spin motion",
            "orbital motion",
        ]
    },
    {
        numb: 27,
        question: "Two perpendicular vectors having magnitudes of 4 units and 3 units are added.Their resultant has a magnitude of",
        answer: "5 units",
        options: [
            "7 units",
            "12 units",
            "25 units",
            "5 units",
        ]
    },
    {
        numb: 28,
        question: "The luminous intensity of light is measured in ",
        answer: "candela",
        options: [
            "dioptre",
            "candela",
            "decibel",
            "watt/m^2",
        ]
    },
    {
        numb: 29,
        question: "A 600N man runs up a stair of 4m height, in 3 seconds.The power needed is",
        answer: "800 watts",
        options: [
            "240 watts",
            "350 watts",
            "800 watts",
            "450 watts",
        ]
    },
    {
        numb: 30,
        question: "Intensity of sound is measured in",
        answer: "watt/m^2",
        options: [
            "watt/m^2",
            "joule/m",
            "watt/s",
            "watt/m",
        ]
    },
    {
        numb: 31,
        question: "The dimensions of angular velocity are",
        answer: "M L T-1",
        options: [
            "M L T-1",
            "M0 L T-1",
            "M L-1 T",
            "M L T-2",
        ]
    },
    {
        numb: 32,
        question: "The focal length of a magnifying glass uis equal to the least distance of distanct vision.Its angular magnification will be:",
        answer: "2",
        options: [
            "5",
            "3",
            "2",
            "6",
        ]
    },
    {
        numb: 33,
        question: "When Newton's rings are observed by reflected light,the centre of rings appears dark due to:",
        answer: "Both phase reversal and path difference being zero",
        options: [
            "Both phase reversal and path difference being zero",
            "Path difference zero only",
            "Phase reversal only",
            "Intensity of light being maximum",
        ]
    },
    {
        numb: 34,
        question: "A body, moving along the cirumference of a circle, complete two revolutions.If the radius of the circle is R, the ratio of its displacement to the covered path will be:",
        answer: "zero",
        options: [
            "2πR",
            "zero",
            "πR",
            "4πr",
        ]
    },
    {
        numb: 35,
        question: "A bus of weight 30000N is moving with uniform velocity of 14m/s its acceleration is:",
        answer: "zero",
        options: [
            "9.8m/s^-2",
            "14m/s^-2",
            "7m/s^-2",
            "zero",
        ]
    },
    {
        numb: 36,
        question: "The angular speed of the minute hand of a clock is:",
        answer: "π/1800",
        options: [
            "π/30",
            "π/60",
            "π/1800",
            "π/3600",
        ]
    },
    {
        numb: 37,
        question: "A projectile is fired at an angle 0 with horizontal will be minimum at;",
        answer: "the highest point",
        options: [
            "the highest point",
            "the point of landing on the ground",
            "the point of projection",
            "the points of its path",
        ]
    },
    {
        numb: 38,
        question: "Torque is maximum when force is:",
        answer: "is perpendicular to moment arm",
        options: [
            "is parallel to moment arm",
            "is anti parallel to moment arm",
            "is perpendicular to moment arm",
            "makes an angle of 60` with moment arm",
        ]
    },
    {
        numb: 39,
        question: "Light year is the unit of:",
        answer: "distance",
        options: [
            "time",
            "distance",
            "velocity",
            "luminous intensity",
        ]
    },
    {
        numb: 40,
        question: "The ocean tides are caused by;",
        answer: "gravitional force of both sun and moon",
        options: [
            "sun's gravitional force only",
            "earth's gravitional force only",
            "moon's gravitional force only",
            "gravitional force of both sun and moon",
        ]
    },
    { 
        numb: 41,
        question: "If a man goes above the earth's surface to a distance equal to thrice the earth's radius, the value of acceleration due to gravity at that point",
        answer: "1/16g",
        options: [
            "1/9g",
            "1/4g",
            "1/16g",
            "1/3g",
        ]
    },
    {
        numb: 42,
        question: "Both kilowatt hour and electron volt are the unit of:",
        answer: "energy",
        options: [
            "energy",
            "charge",
            "power",
            "angular momentum",
        ]
    },
    {
        numb: 43,
        question: "If the frequency of the fifth harmonic of a vibration string is 200Hz, its fundamental frequency is:",
        answer: "40Hz",
        options: [
            "40Hz",
            "5Hz",
            "25Hz",
            "100Hz",
        ]
    },
    {
        numb: 44,
        question: "The speed of sound in vaccum is",
        answer: "zero",
        options: [
            "332ms^-1",
            "33200cms^-1",
            "3*10^8ms^-1",
            "zero",
        ]
    },
    {
        numb: 45,
        question: "The number of lines per cm of a diffraction grating is 4000.Its grating elemnt is:",
        answer: "2.5*10^-4cm",
        options: [
            "2.5*10^-4cm",
            "2.5*10^-6cm",
            "4*10^2cm",
            "4*10^5cm",
        ]
    },
    {
        numb: 46,
        question: "The distance between two consecutive nodes of a transerve stationary waves is ewual to:",
        answer: "λ/2",
        options: [
            "λ/4",
            "λ/2",
            "λ",
            "2λ",
        ]
    },
    {
        numb: 47,
        question: "An astronomical telescope is focused at infinity.The focal length of its objective is 0.2m and that of the eyepiece is 5cm, the length of the telescope is:",
        answer: "5.2cm",
        options: [
            "2.5cm",
            "4cm",
            "5.2cm",
            "25cm",
        ]
    },
    {
        numb: 48,
        question: "The ratio of S.I. unit of angular momentum of linear momentum is:",
        answer: "J.N^-1",
        options: [
            "J.s",
            "J.N^-1",
            "J.N",
            "N.J",
        ]
    },
    {
        numb: 49,
        question: "The number of significant figure in 1.6*10^-19 is:",
        answer: "2",
        options: [
            "3",
            "4",
            "6",
            "2",
        ]
    },
    {
        numb: 50,
        question: "The magnitude of product k.(j*i):",
        answer: "-1",
        options: [
            "-1",
            "zero",
            "|k|",
            "1",
        ]
    },
    {
        numb: 51,
        question: "Stroke's law is applicable to the;",
        answer: "moving bodies through viscous medium",
        options: [
            "bodies resting on the surface of liquid",
            "moving bodies through on viscous medium",
            "moving bodies through viscous medium",
            "moving bodies through vaccum",
        ]
    },
    {
        numb: 52,
        question: "The dimensions of G are:",
        answer: "M-1 L3 T2",
        options: [
            "M-1 L3 T2",
            "M L2 T1",
            "M2 L2 T2",
            "M L T-2",
        ]
    },
    {
        numb: 53,
        question: "If velocity of a body is decreasing, the direction of acceleration is:",
        answer: "opposite to the direction of velocity",
        options: [
            "in the direction of velocity",
            "perpendicular to the direction of velocity",
            "opposite to the direction of velocity ",
            "60` to the direction of velocity",
        ]
    },
    {
        numb: 54,
        question: "The rate of change of angular momentum is also known as",
        answer: "torque",
        options: [
            "force",
            "torque",
            "energy",
            "linear momentum",
        ]
    },
    {
        numb: 55,
        question: "At a distance, equal to twice of the radius of earth above the surface of the earth, the value of gravitional acceleration will be;",
        answer: "one ninth",
        options: [
            "one fourth",
            "one half",
            "one third",
            "one ninth",
        ]
    },
    {
        numb: 56,
        question: "The range of audible sound is:",
        answer: "20Hz-20000Hz",
        options: [
            "20Hz-20000Hz",
            "2100Hz-240000Hz",
            "25000Hz-500000Hz",
            "1Hz-5Hz",
        ]
    },
    {
        numb: 57,
        question: "The conditon of interference in thin flim are reversed due to:",
        answer: "phase reversal",
        options: [
            "phase reversal",
            "refraction",
            "phase coherence",
            "diffracrtion",
        ]
    },
    {
        numb: 58,
        question: "The magnifying power of a lens of focal length 1/2m is:",
        answer: "2 diopters",
        options: [
            "1 diopters",
            "2 diopters",
            "100 diopters",
            "50 diopters",
        ]
    },
    {
        numb: 59,
        question: "This equation represent Bragg's law:",
        answer: "mλ=2dsin0",
        options: [
            "mλ=2dsin0",
            "mλ=dsin0",
            "2mλ=dsin0",
            "2mλ=3dsin0",
        ]
    },
    {
        numb: 60,
        question: "The distance between the principal focus and the optical centre is called:",
        answer: "focal length",
        options: [
            "aperture",
            "principal axis",
            "focal length",
            "radius of curvature",
        ]
    },
    {
        numb: 61,
        question: "If i, j and k are unit vectors then k.(i*j) is equal to:",
        answer: "one",
        options: [
            "j",
            "k",
            "zero",
            "one",
        ]
    },
    {
        numb: 62,
        question: "The angle between centripetal acceleration and tangential acceleration in circular motion is:",
        answer: "90`",
        options: [
            "90`",
            "180`",
            "45`",
            "0`",
        ]
    },
    {
        numb: 63,
        question: "Kitabul Manazir was written by:",
        answer: "Ibn-Al Haitham",
        options: [
            "Al Razi",
            "Ibn-Al Haitham",
            "Abu-Rehan Al Beruni",
            "Jabir bin Hayyan",
        ]
    },
    {
        numb: 64,
        question: "One radian is equal to:",
        answer: "57.3`",
        options: [
            "1`",
            "75.3`",
            "57.3`",
            "0.017`",
        ]
    },
    {
        numb: 65,
        question: "One kilo watt hour is equal to:",
        answer: "3.6*10^6J",
        options: [
            "3.4*10^2J",
            "3.3*10J",
            "3.6*10^6J",
            "3.6*10J",
        ]
    },
    {
        numb: 66,
        question: "Two vibration bodies, having slighty different frequineces, produce:",
        answer: "beats",
        options: [
            "echo",
            "beats",
            "reasonance",
            "polarization",
        ]
    },
    {
        numb: 67,
        question: "If A.B=0 A*b=0 and A=0, the vector B is:",
        answer: "zero",
        options: [
            "zero",
            "equal to A",
            "parallel to A",
            "perpendicular to A",
        ]
    },
    {
        numb: 68,
        question: "Kinetic friction is always:",
        answer: "greater then static friction",
        options: [
            "equal to static friction",
            "greater then static friction",
            "less then static friction",
            "zero",
        ]
    },
    {
        numb: 69,
        question: "Electron volt is the unit of:",
        answer: "energy",
        options: [
            "power",
            "voltage",
            "energy",
            "charge",
        ]
    },
    {
        numb: 70,
        question: "The y-components of vectir |A|=15 units when it form an angle of 50` with positive x-axis is: ",
        answer: "11.5 units",
        options: [
            "11.5 units",
            "9.6 units",
            "-9.6 units",
            "-11.5 units",
        ]
    },
    {
        numb: 71,
        question: "The rate of change of linear momentum",
        answer: "force",
        options: [
            "torque",
            "force",
            "velocity",
            "acceleration",
        ]
    },
    {
        numb: 72,
        question: "If 'F' be the limiting friction and 'R' the normal reaction, then co-efficient of static friction 'u' is: ",
        answer: "u=F/R",
        options: [
            "u=F/R",
            "u=R/F",
            "u=RF",
            "u=1/FR",
        ]
    },
    {
        numb: 73,
        question: "The unit of angular velocity is:",
        answer: "radian/sec",
        options: [
            "meter/sec",
            "radian/cm",
            "radian/sec^2",
            "radian/sec",
        ]
    },
    {
        numb: 74,
        question: "The value of gravitional constrant 'G' was determined experimentaly by",
        answer: "Cavendish",
        options: [
            "Newton",
            "Cavendish",
            "Jouls",
            "Huygens",
        ]
    },
    {
        numb: 75,
        question: "Newton's rings illustrate the phenomenon of:",
        answer: "interference",
        options: [
            "polarization",
            "diffraction",
            "interference",
            "dispersion",
        ]
    },
    {
        numb: 76,
        question: "The final image formed by a compound microscope is:",
        answer: "virtual and magnified",
        options: [
            "virtual and diminished",
            "virtual and magnified",
            "real and diminished",
            "real and magnified",
        ]
    },
    {
        numb: 77,
        question: "Polarization of light due to tourmaline crystals take place because of:",
        answer: "absorption",
        options: [
            "refraction",
            "absorption",
            "collision",
            "reflection",
        ]
    },
    {
        numb: 78,
        question: "This one of the following is not the unit of power:",
        answer: "killowatt hour",
        options: [
            "killowatt hour",
            "joules/sec",
            "horse power",
            "foot-pound/sec",
        ]
    },
    {
        numb: 79,
        question: "If a person ascends from the surface of the earth to a distance equal to the radius of the earth, the value of g will be:",
        answer: "1/4g",
        options: [
            "2g",
            "4g",
            "1/2g",
            "1/4g",
        ]
    },
    {
        numb: 80,
        question: "The earth quake waves are the example of:",
        answer: "infrasonic waves",
        options: [
            "infrasonic waves",
            "shock waves",
            "ultrasonic waves",
            "audible waves",
        ]
    },
    {
        numb: 81,
        question: "Kilowatt hour is a unit of:",
        answer: "energy",
        options: [
            "power",
            "energy",
            "time",
            "work",
        ]
    },
    {
        numb: 82,
        question: "If an object is placed of principal focus'F' of coverging lens, the image will be formed:",
        answer: "at inifinity",
        options: [
            "at 2F",
            "at F",
            "between focus and optical centre",
            "at inifinity",
        ]
    },
    {
        numb: 83,
        question: "Diffraction of light is special type of:",
        answer: "refraction",
        options: [
            "reflection",
            "interference",
            "refraction",
            "polarization",
        ]
    },
    {
        numb: 84,
        question: "An angle suspended at its centre by an arc whose length is double to that of its radius is:",
        answer: "114.6`",
        options: [
            "114.6`",
            "57.3`",
            "25.9`",
            "168.6`",
        ]
    },
    {
        numb: 85,
        question: "The length of a Galilean telescope when focused for infinity is:",
        answer: "Fo-Fe",
        options: [
            "Fo-Fe",
            "Fo/Fe",
            "Fo+Fe",
            "Fe-Fo",
        ]
    },
    {
        numb: 86,
        question: "IF mass and speed both are doubled, the kinetic energy will be:",
        answer: "eight times",
        options: [
            "doubled",
            "same",
            "eight times",
            "six times",
        ]
    },
    {
        numb: 87,
        question: "Power law determines:",
        answer: "loudness of sound",
        options: [
            "work",
            "power",
            "intensity",
            "loudness of sound",
        ]
    },{
        numb: 88,
        question: "If the average and instantaneous velocities of a body are the same, the body will move with:",
        answer: "uniform velocity",
        options: [
            "velocity",
            "uniform velocity",
            "acceleration",
            "varibale velocity",
        ]
    },
    {
        numb: 89,
        question: "The maximum numbers of beats per second which can be detected by the human ear is:",
        answer: "7",
        options: [
            "7",
            "2",
            "6",
            "5",
        ]
    },
    {
        numb: 90,
        question: "In the terrestrail telescope, the central lens is used to:",
        answer: "erect image",
        options: [
            "both of these",
            "increase in magnification",
            "erect image",
            "none of these",
        ]
    },
    {
        numb: 91,
        question: "The centre of mass of a body",
        answer: "concedes with the centre of gravity",
        options: [
            "concedes with the centre of gravity",
            "always coincides with the centre of gravity",
            "is lower to the centre of gravity",
            "never coincides to the centre of gravity",
        ]
    },
    {
        numb: 92,
        question: "The weight of mass is 600N at the earth, his weight on the moon, where gm=g/6 will be:",
        answer: "100N",
        options: [
            "3600N",
            "100N",
            "300N",
            "600N",
        ]
    },
    {
        numb: 93,
        question: "A wave enters from one medium to another medium, no change occurs in its:",
        answer: "frequency",
        options: [
            "amplitude",
            "magnitude",
            "frequency",
            "wavelength",
        ]
    },
    {
        numb: 94,
        question: "The angular momentum of particle changes from 0 to 720 J.S. in 4sec, the magnitude of torque acting will be:",
        answer: "180 J",
        options: [
            "180 J",
            "360 J",
            "4.5 J",
            "440 J",
        ]
    },
    {
        numb: 95,
        question: "Monochromatic yellow light is unavle to show:",
        answer: "dispersion",
        options: [
            "refraction",
            "reflection",
            "interference",
            "dispersion",
        ]
    },
    {
        numb: 96,
        question: "Light year is the unit of:",
        answer: "distance",
        options: [
            "distance",
            "velocity",
            "speed",
            "time",
        ]
    },
    {
        numb: 97,
        question: "A weight lifter consumes 500J of energy to lift the load in 2 sec, the power used by him is:",
        answer: "250 watt",
        options: [
            "150 watt",
            "250 watt",
            "500 watt",
            "2500 watt",
        ]
    },
    {
        numb: 98,
        question: "The S.I unit of intensity level of sound is:",
        answer: "sone",
        options: [
            "watt",
            "sone",
            "diopter",
            "decibel",
        ]
    },
    {
        numb: 99,
        question: "The property of fluids due to which they resists thier flow is called:",
        answer: "viscosity",
        options: [
            "viscosity",
            "static friction",
            "co-efficient of friction",
            "thermal viscosity",
        ]
    },
    {
        numb: 100,
        question: "According to Maxwell theory, light travels in the form of:",
        answer: "electromagnetic wave",
        options: [
            "longitudinal wave",
            "electromagnetic wave",
            "transerve wave",
            "mechanical wave",
        ]
    },
    {
        numb: 101,
        question: "The products of two numbers 5.642 and 4.71 in the prospective significants number is:",
        answer: "26.6",
        options: [
            "233.4",
            "12.6",
            "26.6",
            "56.3",
        ]
    },
    {
        numb: 102,
        question: "The magnitude of torque of the couple depends on:",
        answer: "the distance between (F) and (-F)",
        options: [
            "none of these",
            "the distance of (F) from origin",
            "the distance of (-F) from origin",
            "the distance between (F) and (-F)",
        ]
    },
    {
        numb: 103,
        question: "Huygen's principal is used to:",
        answer: "locate the wave front",
        options: [
            "locate the wave front",
            "determine the speed of light",
            "find the refractive index",
            "expressed polarization",
        ]
    },
    {
        numb: 104,
        question: "The rate of doing work is zero when the angle between force and velocity is:",
        answer: "90`",
        options: [
            "90`",
            "60`",
            "45`",
            "180`",
        ]
    },
    {
        numb: 105,
        question: "If A=ai and B=bj, then A*B is equal to:",
        answer: "abk",
        options: [
            "0",
            "-abk",
            "abk",
            "none of these",
        ]
    },
    {
        numb: 106,
        question: "The wave theory of light cannont explain:",
        answer: "photoelectric effect",
        options: [
            "interference",
            "photoelectric effect",
            "diffraction",
            "none of these",
        ]
    },
    {
        numb: 107,
        question: "This is compression wave:",
        answer: "sound wave",
        options: [
            "x-rays",
            "y-rays",
            "sound wave",
            "light rays",
        ]
    },
    {
        numb: 108,
        question: "Electromagnetic waves consists of oscillating electric and magnitic fields, both are:",
        answer: "perpendicular to each other",
        options: [
            "non parallel to each other",
            "same",
            "parallel to each other",
            "perpendicular to each other",
        ]
    },
    {
        numb: 109,
        question: "When a body is moving upward the work done will be:",
        answer: "negative",
        options: [
            "negative",
            "postive",
            "zero",
            "maximum",
        ]
    },
    {
        numb: 110,
        question: "The velocity of sound in space is:",
        answer: "zero",
        options: [
            "335 m/sec",
            "zero",
            "2500 m/sec",
            "12 m/sec",
        ]
    },
    {
        numb: 111,
        question: "STroke laws holds good for:",
        answer: "motion through viscous medium",
        options: [
            "the bodies of all shapes",
            "motion through non-viscous medium",
            "motion through viscous medium",
            "motion through vaccum",
        ]
    },
    {
        numb: 112,
        question: "The horizontal range of projectile depands upon",
        answer: "all of them",
        options: [
            "the angle of projection",
            "'g' at the place",
            "the velocity of projectile",
            "all of them",
        ]
    },
]