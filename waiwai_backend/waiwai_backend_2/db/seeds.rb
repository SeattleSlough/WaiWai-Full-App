# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Hotel.create(name:"Wailea Beach Resort - Mariott, Maui", rate: 996, stars: 4.6, room:"Premium Ocean Sundeck, Lanai, Ocean View", description:"Spend the day relaxing at the nearby beach, practicing your swing on the golf course, or pampering yourself at the full-service spa.  Then enjoy a meal at one of Wailea Beach Resort Maui's 4 restaurants", image:"https://cache.marriott.com/marriottassets/marriott/HNMMC/hnmmc-sundeck-0197-hor-clsc.jpg")

Hotel.create(name:"The Ritz_Carlton, Kapalua", rate:2679, stars:4.5, room: "Ocean Front Suite", description: "Discover timeless island luxury at The Ritz-Carlton, Kapalua. Nestled onto 54 acres overlooking the Pacific Ocean, this five-star resort complements Maui’s natural splendor with modern amenities like contemporary guest rooms and suites, championship golf courses, sophisticated dining, extensive event space and spa treatments steeped in Hawaiian culture. Perfect for honeymoons, family getaways and conferences.", image: "https://s7d2.scene7.com/is/image/ritzcarlton/50518066-RC_JHMRZ_pool3.V4-1?$XlargeViewport100pct$")

Hotel.create(name:"Andaz Maui at Wailea Resort", rate:4269, stars:4.6, room: "Three Bedroom Oceanfront Villa", description:"Retreat to Andaz Maui at Wailea Resort, a luxury hotel set on 15 beachfront acres. Immerse yourself in the island spirit with regional farm-to-table dining, direct access to Mokapu Beach, and rooms boasting tropical views. Explore the exotic Polynesian culture and history of Maui during the resort luau experience, featuring an authentic ‘ohana-style meal and cocktails during the Feast at Mokapu.", image:"https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1657/OGGAW-P108-Exterior.jpg/OGGAW-P108-Exterior.16x9.jpg?imwidth=1280")

Hotel.create(name:"Fairmont Kea Lani Maui", rate:2244, stars:4.5, room:"Three Bedroom Oceanfront Villa", description: "Imagine an island oasis where bright blue skies, a shimmering golden sand beach and an abundance of tropical blooms create a lush vibrant retreat for all. Fairmont Kea Lani is this very special place, and we look forward to welcoming you with aloha to our oceanfront paradise. Experience the Hawaii vacation of your dreams on Maui's coveted Wailea coast at our all-suite and villa luxury resort and spa.", image:"https://www.fairmont.com/assets/0/137/10839/10898/10900/14439/ba64e37b-88a2-401e-8fea-abcd20ad4ddd.jpg")

Hotel.create(name:"Grand Wailea", rate:3599, stars:4.9, room: "Napua Club Royal Suite",description: "The Grand Wailea Resort & Spa is a 40-acre Waldorf-Astoria luxury resort located on the beach in Wailea, Maui, Hawaii, and also home to 2 of the twelve Fishpipes in the world.", image:"https://www.grandwailea.com/wp-content/uploads/2016/06/grand-wailea-all-pools-aerial-257x210.jpg")

Hotel.create(name:"Four Seasons Resort Maui at Wailea", rate:5800, stars: 4.8, room: "Club Floor Ocean-View Prime Executive Suite", description:"Disappear and rediscover yourself at the new Four Seasons Resort Maui at Wailea. This iconic Hawaiian hideaway takes perfection to new heights. Experience Hawaii like never before, discover a better place to see, to be seen and to be unseen.", image:"https://www.fourseasons.com/content/dam/fourseasons/images/web/MAU/MAU_1149_aspect16x9.jpg/jcr:content/renditions/cq5dam.web.637.358.jpeg")

Restaurant.create(name: "Mama's Fish House",
description: "While sailing across the South Pacific in the late 1950s, the young Christenson family embraced the lifestyle of old Polynesia, discovering the ways of preparing fish and living the aloha spirit. They settled on Maui in 1963 and in 1973 Mama’s Fish House was born – Maui’s first fresh fish restaurant.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/mamas-fish-house-07.jpg",
cost_per_person: 250,
stars: 5)

Restaurant.create(name:"Koiso Sushi Bar", description: "Located in Kihei, Koiso Sushi Bar is Maui’s go-to sushi restaurant for an always pleasureful and intimate dinner in Kihei, South Maui. Here is where you’ll find fantastic service, an authentic Japanese menu (with a slight Maui twist), fresh fish and seafood, and menu ingredients that are always infused with only best of Hawaii’s local and sustainable farm culture.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/Top-33-Maui-Restaurants-Koiso-Sushi-Bar-05.jpg",
cost_per_person: 150,
stars: 5)

Restaurant.create(name: "Nuka",
description: "NUKA is possibly the most authentic modern-Japanese restaurant in Hawaii, not just the Island of Maui. Owned by the Paia Fish Market family, this is without a doubt, totally their tour de force Maui restaurant. Tucked away in the beautifully elusive Haiku community, NUKA is located off Haiku Road; adjacent the Haiku Post Office and the Aloha Aina Center. There aren’t many seats, so make reservations, or plan ahead accordingly. If you love authentic Japanese cuisine, you do not want to miss out on this Maui dining experience.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/nuka-04.jpg",
cost_per_person: 125,
stars: 4.75)

Restaurant.create(name: "The Pint & Cork",
description: "The Island of Maui has needed a restaurant like The Pink & Cork for so long! Located in the Shops at Wailea, The Pint & Cork is where you’ll find an island-style version of gastronomy gone brewpub. Great for weekend breakfasts (they have a Bloody Mary bar), and daily lunch, happy hour, dinner and late-night dining, here’s a spot to put on your Maui rotation.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/pint-cork-01.jpg",
cost_per_person: 45,
stars: 4.75)

Restaurant.create(name: "Lineage",
description: "Located in Wailea, Lineage Maui is Chef Sheldon Simeon’s newest culinary adventure. Famously known for his participation (and wins) in Bravo channel’s American Top Chef’s series, here’s a Maui restaurant that you definitely don’t want to miss when you’re on the Valley Isle.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/Top-33-Maui-Restaurants-lineage-11.jpg",
cost_per_person: 160,
stars: 4.75)

Restaurant.create(name: "Spago",
description: "Spago Maui is located at the Four Seasons Maui Resort in Wailea. It’s one of Chef Wolfgang Puck’s five Spago establishments; the sister restaurants are found in Beverly Hills, Las Vegas, Istanbul, and Singapore. Perched inside one of the most amazing resorts in Maui, here’s a great option for Hawaii fine dining with ocean views in South Maui.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/top-33-restaurants-maui-spagos-03.jpg",
cost_per_person: 250,
stars: 4.75)

Restaurant.create(name: "Monkeypod Kitchen",
description: "Monkeypod Kitchen is one of Chef Peter Merriman’s newest culinary ventures. Located in Wailea with dramatic Pacific Ocean views, Monkeypod has quickly become one of Maui’s most popular dining destinations.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/monkeypod-05.jpg",
cost_per_person: 150,
stars: 4.75)

Restaurant.create(name: "Chef's Table at the Mill House",
description: "For a truly unique dining experience on Maui, consider booking dinner at the Chef’s Table at the Mill House. Located in the Maui Tropical Plantation, here is where you’ll find a weekly (every Saturday) interactive culinary experience enjoyed with a chef’s perspective.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/top-restaurants-maui-chefs-table-mill-house-05b.jpg",
cost_per_person: 225,
stars: 4.75)

Restaurant.create(name: "Roy's Ka'anapali",
description: "Roy’s restaurants are one of the most critically acclaimed Hawaiian fine dining establishments in the world. In 1988, Roy Yamaguchi opened his first signature restaurant in Hawaii Kai, Honolulu (Oahu), and it’s now grown to over 30 international locations. In fact, Roy’s in Kaanapali was the second flagship location ever to be opened.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/top-33-restaurants-maui-roys-01.jpg",
cost_per_person: 175,
stars: 4.5)

Restaurant.create(name: "Morimoto Maui",
description: "Located at the Andaz Maui Resort in Wailea, Morimoto is named after the highly-acclaimed celebrity Chef Masaharu Morimoto of Iron Chef and Iron Chef America. Besides being one of the best restaurants in Maui, guests will also surely enjoy breathtaking views of Mokapu Beach while savoring a tasty meal. Morimoto’s menu is full of local, farm and ocean fresh ingredients. Popular items are hand-rolled sushi, fresh fish, steak and seasonal cocktails with a Japanese and Western flair.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/morimoto-06.jpg",
cost_per_person: 200,
stars: 4.5)

Restaurant.create(name: "Taverna",
description: "Located in the Kapalua Resort is one of Maui’s newest and most amazing restaurants, Taverna. Taverna is open Monday-Friday for Lunch, daily Dinner Service (after 5:30 pm), and Weekend Brunch. With huge Pacific Ocean and award-winning fairway views, here’s a hot spot to put on your Maui dining bucket list. It’s quite a large restaurant with a huge wrap around bar and a spacious dining room. Without a doubt, attention to detail and eye for the interior design were definitely applied when creating this Maui restaurant.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/Taverna-15.jpg",
cost_per_person: 125,
stars: 4.5)

Restaurant.create(name: "Ferraro's Bar e Ristorante",
description: "Located at the Four Seasons Resort Maui in Wailea, Ferraro’s offers daily oceanfront dining for lunch and dinner. With live music Tuesday-Saturday, and one of the best vantage points in South Maui for a magical maui sunset scene, this is one of the most romantic places to enjoy an outdoor meal on Maui. Sit back, relax, and order a crisp New Zealand Sauvignon Blanc, or a refreshing muddled cocktail before your meal.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/ferraros-06.jpg",
cost_per_person: 250,
stars: 4.5)

Restaurant.create(name: "Down the Hatch",
description: "Located on Front Street’s ‘Restaurant Row’ in Lahaina Town, you’ll find Down the Hatch. This West Maui restaurant is surely more than meets the eye with its full spectrum of offerings; full menu, lively bar, adult shave ice, and daily events. For breakfast, lunch, happy hour, or dinner, it’s s a perfect destination for all Maui visitors.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/Top-33-Maui-Restaurants-Down-the-Hatch-11.jpg",
cost_per_person: 45,
stars: 4.5)

Restaurant.create(name: "DUO Steak & Seafood",
description: "DUO Steak and Seafood is another amazing restaurant located at the Maui Four Seasons Resort in Wailea. DUO is located on the ground floor of the resort, and offers both indoor and outdoor dining options. Here, you’ll find an ala carte menu and breakfast buffet daily, and magical dinners. This Maui steakhouse restaurant offers a full dinner menu from 5:30-9pm 7-days a week.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/duo-steak-seafood-07.jpg",
cost_per_person: 200,
stars: 4.5)

Restaurant.create(name: "Hali'imaile General Store",
description: "There are many spectacular things in prospect for you if you’ve never been to the Hali’imaile General Store in Upcountry-Maui. For those that have been here, perhaps even numerous times, you know what we’re talking about. Located just a 10-minute drive up Baldwin Avenue from the Historic Paia Town, guests will surely find one of Maui’s best restaurants tucked amongst sugar cane fields and a lot of local history.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/Haliimaile-General-Store.jpg",
cost_per_person: 160,
stars: 4.25)

Restaurant.create(name: "Merriman's Kapalua",
description: "Merriman’s Kapalua is located in West Maui at one of the most incredible oceanfront locations within the Kapalua Resort. Merriman’s on Maui offers a wonderful farm-to-table style menu, using only the finest organic and sustainable products from the Hawaiian Islands. 90% of their award winning menu is locally sourced, and their culinary creations are outstanding.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/merrimans-05.jpg",
cost_per_person: 250,
stars: 4.25)

Restaurant.create(name: "Lahaina Grill",
description: "Lahaina Grill is located in West Maui in the heart of the Historic Town of Lahaina. For over 21 years, Lahaina Grill has maintained its status as one of the best restaurants on Maui and rightfully deserved. Lahaina Grill is a wonderful culinary establishment, and they have definitely perfected their version of New American cuisine, blended with the freshest island ingredients and international culinary techniques. When dining at the Lahaina Grill, enjoy their menu full of tantalizing selections.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/lahaina-grill-04.jpg",
cost_per_person: 175,
stars: 4.25)

Restaurant.create(name: "The Restaurant at Hotel Wailea",
description: "The Restaurant at Hotel Wailea is located in the same space that was once known as the Capische restaurant. The resort didn’t just re-brand the restaurant, they completely changed gears. When at the Restaurant at Hotel Wailea, look forward to a menu full of locally grown and sourced Hawaii ingredients: organic produce, free range meats and locally caught seafood options.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/hotel-wailea-04.jpg",
cost_per_person: 220,
stars: 4.25)

Restaurant.create(name: "Naulu's South Shore Grill",
description: "Next time your cruising through South Maui, make sure to stop for a meal at Nalu’s South Shore Grill. Whether you choose to check them out for breakfast, lunch, happy hour or dinner- it will always be amazing! Located near the Ace Hardware store in the Azeka Plaza, you’ll notice that just the sight of Nalu’s is both enticing and inviting. Here, you’ll find that the vibes are just as full of aloha as the menu.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/nalus-01.jpg",
cost_per_person: 30,
stars: 4.25)

Restaurant.create(name: "Maui Brewing Company",
description: "Maui Brewing Company is Maui’s premier handcrafted craft beer maker. With a tasting room in South Maui and a great brewpub restaurant in Kahana, we highly recommend that you check out both spots during your next foodie adventure in Maui. At the Kahana brew-pub, guests can taste all flavors of Maui Brewing Co. craft beers; accompanied by a unique menu.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/Maui_Brew_Co_Kahana-15.jpg",
cost_per_person: 45,
stars: 4.25)

Restaurant.create(name: "The Plantation House",
description: "Enjoy endless culinary possibilities at the Plantation House restaurant at the Kapalua Resort. All guests will surely dine in style and lavish in luxury with Maui’s Pacific Ocean, Kapalua fairway, and outer island views.",
image: "https://www.cohnrestaurants.com/files/large/8d1e0dcaddd1cc8",
cost_per_person: 200,
stars: 4.25)

Restaurant.create(name: "Star Noodle",
description: "“Oh, Star Noodle… let me count the many ways that I love thee….” Yes, words like those will enter your mind as you thoroughly enjoy dining at Star Noodle. Star Noodle is located off the beaten path in Lahaina, West Maui. This super delicious and trendy Maui restaurant is popular for many reasons, including the fantastic Pan-Asian menu and the the stylish setting.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/star-noodle-01.jpg",
cost_per_person: 35,
stars: 4)

Restaurant.create(name: "Ka'ana Kitchen",
description: "Ka’ana means to share, and here we share from our heart. Using techniques from around the culinary world and through partnerships with local farmers, ranchers, and fishermen, we provide safe and local harvest while honoring the traditions of Hawaii’s diverse culture. Welcome to Ka’ana Kitchen…",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/Kaana-Kitchen-11.jpg",
cost_per_person: 175,
stars: 4)

Restaurant.create(name: "Japengo",
description: "Japengo is celebrated for serving up some of Maui’s most delicious and exotic Pacific Rim cuisine. Offering an Asian inspired menu that is infused with Hawaiian flavors, this renowned world-class restaurant is located at the Hyatt Regency Maui in Ka’anapali.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/japengo-04.jpg",
cost_per_person: 150,
stars: 4)

Restaurant.create(name: "Honu Seafood & Pizza",
description: "Honu Seafood & Pizza is owned and operated by Mark Ellman, a well known Maui restauranteur. Honu is located on Front Street behind the Lahaina Cannery Mall. It’s a perfect spot to enjoy a tantalizing menu, awesome customer service, Pacific Ocean and outer island views, sunset, and a glimpse of Hawaiian Green Sea Turtles on the shoreline.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/honu-seafood-pizz-04.jpg",
cost_per_person: 175,
stars: 4)

Restaurant.create(name: "Casanova Bistro",
description: "Casanova Bistro in Kahului is the go-to restaurant for authentic Italian dining in Maui. What makes their restaurant extra special is that the menu is not only full of classic favorites, but also locally grown produce, meats, and fresh seafood. For lunch, guests can choose from a variety of fresh salads, pasta dishes, fritti, crepes, sandwiches, and panini. The dinner menu includes salads, pastas, entrees, and meat dishes.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/Casanova-pic2.jpg",
cost_per_person: 132,
stars: 4)

Restaurant.create(name: "Milagros",
description: "Smack dab in the center of the trendy bohemian town of Paia, visitors will find Milagros Food Company. You definitely will want to check out this amazing family run restaurant with its covered sidewalk seating right in the heart of Paia.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/Milagros-15.jpg",
cost_per_person: 90,
stars: 4)

Restaurant.create(name: "Paia Fish Market",
description: "Paia Fish Market’s flagship location, established in 1989, is on the corner of Baldwin Avenue and Hana Highway in Paia Town. They also have two other locations in Kihei and Lahaina.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/PaiaFishMarket_16_web.jpg",
cost_per_person: 60,
stars: 3.75)

Restaurant.create(name: "Flatbread Company",
description: "Flatbread Company is the best casual, family-style restaurant on Maui. Located on the North Shore in the Historic Town of Paia, this restaurant provides guests with the best flatbread pizza and salad selections in all of Hawaii, made with local organic ingredients.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/flatbread-04.jpg",
cost_per_person: 60,
stars: 3.75)

Restaurant.create(name: "Cuatro",
description: "Located between Sansei and Foodland in Central Kihei, Cuatro is a local favorite for happy hour and dinner on Maui. It’s one of the most popular restaurants in Kihei, and a great place to enjoy a relaxing and impressive meal in South Maui.",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/cuatro-02.jpg",
cost_per_person: 100,
stars: 3.75)

Restaurant.create(name: "Gannon's Restaurant",
description: "Gannon‘s Restaurant, located on the Wailea Gold and Emerald Golf Course, boasts amazing views and Hawaii-sourced fresh ingredients. Another Bev Gannon marvel (Hali’imaile General Store), the classic and contemporary dishes are both creative and delicious!",
image: "https://media-prideofmaui.netdna-ssl.com/blog/wp-content/uploads/2017/01/gannons-04.jpg",
cost_per_person: 140,
stars: 3.75)