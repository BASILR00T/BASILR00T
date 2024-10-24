// Wrap every letter in a span
const textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



const stories = [
    {
        name: "The Lost Key",
        content: `Anya was a curious girl who loved exploring her grandmother's attic. One day, while rummaging through an old trunk, she found a tarnished silver key. Intrigued, she tried it on every lock she could find in the attic. None fit.

        Disappointed but determined, Anya decided to ask her grandmother about the key. Her grandmother smiled and told her a story about a secret garden hidden behind a locked door. The key, she said, was the only way to unlock it.

        Anya's heart raced with excitement. She spent the next few days searching the attic for a hidden door. Finally, behind a dusty curtain, she found a small, ornate door. With trembling hands, she inserted the key into the lock. It turned with a satisfying click.

        As Anya pushed the door open, a burst of sunlight flooded the room. Before her lay a breathtaking garden, filled with colorful flowers and a babbling brook. She had found the secret garden her grandmother had spoken of. And with the tarnished silver key, she had unlocked a world of wonder.`
    },
    {
        name: "The Curious Caterpillar",
        content: `In a lush green garden, a tiny caterpillar named Curious crawled from his cocoon. He was eager to explore the world around him. He nibbled on juicy leaves, climbed tall trees, and even took a dip in a sparkling pond.

        One day, Curious spotted a bright, red flower. He had never seen anything like it before. With a determined glint in his eye, he began to climb towards it. The flower was higher than he thought, but Curious didn't give up. He used his strong legs and tiny claws to inch his way up.

        Finally, he reached the top of the flower. The view was breathtaking. He could see the entire garden, with its colorful flowers and buzzing bees. Curious felt a sense of accomplishment and joy. He had conquered his fear and discovered a new adventure.`
    },
    {
        name: "The Brave Little Bird",
        content: `In a cozy nest high in a tree, a small bird named Fearless hatched from his egg. He was a curious little bird, always eager to explore the world outside his nest. However, he was also very afraid of flying.

        One day, Fearless's mother gently pushed him out of the nest. He flapped his wings as hard as he could, but he couldn't seem to get off the ground. Fear gripped him as he plummeted towards the ground. Just when he thought he was going to crash, he felt a rush of air beneath his wings. He was flying!

        Fearless soared through the sky, feeling a sense of freedom he had never known before. He realized that his fear had been holding him back. With newfound courage, he flew back to his nest, where his mother greeted him with a proud smile. From that day on, Fearless was no longer afraid to fly. He had discovered that with a little courage, anything is possible.`
    },
    {
        name: "The Enchanted Forest",
        content: `Deep in the heart of an emerald forest, there lived a little girl named Lila who loved to explore. One day, she stumbled upon a path that sparkled with golden dust. Excited, she followed the shimmering trail.

        The path led her to a clearing filled with towering trees, colorful flowers, and magical creatures. She met a friendly fox who offered to show her the wonders of the forest. Together they explored hidden waterfalls, witnessed fairies dancing, and listened to the songs of the nightingale.

        Lila realized that this enchanted forest was a place where dreams came true and that every adventure was waiting to unfold just beyond the path.`
    },
    {
        name: "The Magical Paintbrush",
        content: `Once in a small village lived a young artist named Mia. One day, she found a paintbrush that sparkled in the sunlight. She painted a beautiful flower, and to her amazement, it blossomed right before her eyes!

        Excited by her discovery, Mia began to paint animals and landscapes. Each stroke brought her creations to life. She used her gift to bring joy to her village, painting vibrant murals that filled the streets with color.

        Eventually, Mia realized that true magic comes not from the brush but from the joy of sharing her art with others.`
    },
    {
        name: "The Time-Traveling Clock",
        content: `Tommy inherited an old clock from his grandfather. One day, he noticed it had a peculiar inscription that read, "Time is but a door." Intrigued, he turned the clock's hands backward, and suddenly, he found himself in the past!

        Tommy traveled to ancient Rome, where he met gladiators, and then he ventured to the future, where flying cars zoomed overhead. Each adventure taught him valuable lessons about history and the importance of the present.

        When he returned home, Tommy understood that while time travels wonders, moments spent with family and friends were the most precious adventures of all.`
    },
    {
        name: "The Whispering Wind",
        content: `In a village surrounded by mountains, there was a legend about the Whispering Wind. The villagers believed that if you listened carefully, the wind would share secrets of the universe. A young boy named Leo was determined to hear it.

        One evening, lying on a hilltop, he closed his eyes and listened intently. As the wind brushed past him, he heard soft whispers. They spoke of kindness, courage, and love. Inspired, Leo decided to spread these messages throughout his village.

        The villagers learned the value of compassion, and soon, the entire village thrived in harmony, all thanks to the wisdom of the Whispering Wind.`
    },
    {
        name: "The Lost Treasure",
        content: `Sophie was on a treasure hunt with her friends when they stumbled upon an old map in an ancient library. The map led to a hidden cave said to contain a pirate's treasure. 

        With excitement, they set off on their adventure. They climbed mountains, crossed rivers, and faced challenges together. Finally, they reached the cave and used the map to uncover a chest filled with golden coins and sparkling jewels.

        But as they filled their bags, they realized the true treasure was the friendship and memories they created along the journey.`
    },
    {
        name: "The Kind Hearted Giant",
        content: `In a valley lived a giant named Gerald who was known for his huge heart and gentle nature. Unlike other giants, Gerald spent his days helping the villagers.

        One winter, when a snowstorm trapped everyone in their homes, the villagers panicked. Gerald used his strength to clear paths and deliver food to those in need, ensuring everyone was safe and warm.

        The villagers celebrated Gerald as their hero, realizing that size matters less than the kindness of one's heart.`
    },
    {
        name: "The Friendly Ghost",
        content: `In an old mansion, a friendly ghost named Casper was always yearning for a friend. Most people were afraid of him, but Emma, a brave girl, wasn't scared.

        One rainy day, she took shelter in the mansion, and after a curious encounter, they quickly became friends. Casper shared stories of the past and showed Emma the mansion's hidden secrets.

        With their friendship, they transformed the mansion from a haunted house into a joyful place filled with laughter and memories, proving that friendship knows no bounds, not even between the living and the dead.`
    },
    {
        name: "The Secret Library",
        content: `In a bustling city, a bookish girl named Lucy discovered a hidden library in the basement of an old bookstore. The moment she stepped inside, she was mesmerized by the thousands of books that lined the walls.

        Each book was a portal to a different world. Lucy spent hours exploring far-off lands, meeting interesting characters, and solving mysteries. With every story she read, her imagination flourished.

        The Secret Library became her second home, where she learned that books could take her on the greatest adventures and teach her invaluable lessons about life.`
    },
    {
        name: "The Dream Weaver",
        content: `In a small village, there lived a woman known as the Dream Weaver. People would come to her to help with their dreams, whether they wanted to overcome fears or find true love.

        One night, a young man named Eli visited her, sharing his wish to find his purpose. The Dream Weaver crafted a dream for him, showing him paths he had never considered.

        The experience inspired Eli to follow his heart and pursue his passion for painting, proving that with guidance and belief, one can turn dreams into reality.`
    },
    {
        name: "The Rainbow Bridge",
        content: `On a rainy day, a little boy named Sam watched the clouds with disappointment until he spotted a beautiful rainbow arching across the sky. Curious, he decided to follow it.

        Sam’s journey led him to a magnificent bridge made of colors, and as he stepped onto it, he found himself in a land where everything was vibrant and alive. He made friends with colorful creatures and learned about the importance of embracing differences.

        When he returned home, Sam realized that magic can be found both in dreams and reality as long as you choose to see it.`
    },
    {
        name: "The Wish Granter",
        content: `In a quiet town, there lived a mystical woman known as the Wish Granter. Many came to her with dreams and desires, but every wish had a lesson to be learned.

        One day, a greedy merchant wished for endless wealth. The Wish Granter granted his desire but filled his house with gold and jewels, which soon became a burden. Realizing that happiness didn't stem from possessions but connections, he became kinder and shared his fortune with those in need.

        The merchant learned that true wealth lies in generosity and love, and the town flourished together.`
    },
    {
        name: "The Little Star",
        content: `Far away in the night sky, a little star named Twinkle wished to shine brighter than all the others. She observed the big stars, feeling small and insignificant.

        One day, she met a wise old star who explained that brightness comes from within. With newfound confidence, Twinkle began to twinkle brightly, illuminating the night sky in a unique way.

        The other stars admired her light, teaching Twinkle that true brilliance radiates from being yourself and believing in your own light.`
    },
    {
        name: "The Loving Lion",
        content: `In the savannah, there lived a lion named Leo who was different from others. Instead of being fierce, he was gentle and kind-hearted. All the animals loved him and often sought his advice.

        One day, a drought struck the land, and all the animals were worried. Leo gathered them together to discuss and find solutions. He suggested they work together to share resources and support one another.

        Through unity and Leo's compassionate leadership, the animals thrived even in tough times, proving that love and kindness can conquer challenges.`
    },
    {
        name: "The Surprise Party",
        content: `Mia wanted to throw a surprise birthday party for her best friend, Lily. She enlisted the help of all their friends. They planned decorations, snacks, and games, all while keeping it a secret.

        The big day arrived, and as Lily walked into the room, everyone shouted, "Surprise!" Lily's face lit up with joy. They shared laughter, cake, and wonderful memories.

        That day, Mia learned that the best moments come from celebrating friendship and creating happiness for others.`
    },
    {
        name: "The Brave Knight",
        content: `In a kingdom far away, there was a knight named Arthur who dreamed of being a hero. When a dragon threatened the village, the king called upon his bravest knights.

        Instead of relying solely on strength, Arthur devised a clever plan to distract the dragon. His bravery and wit saved the village, and the grateful people crowned him their hero.

        Arthur realized that true heroism comes from the heart and courage to think differently in difficult situations.`
    },
    {
        name: "The Snowy Adventure",
        content: `On a snowy winter day, a group of children decided to build the biggest snowman ever. They rolled giant snowballs together, laughing and playing.

        As they built their creation, they found a lost puppy shivering nearby. Without hesitation, they brought him inside, warmed him up, and named him Snowy. 

        The children realized that their snowy adventure turned into a mission of kindness, and together, they found a new friend.`
    },
    {
        name: "The Little Explorer",
        content: `Ella, a little girl with a big imagination, loved to explore her backyard. One day, she pretended it was a jungle, and as she searched for hidden treasures, she discovered an old, rusty compass.

        Intrigued, Ele used the compass to guide her around the yard, finding all kinds of "exotic" plants and creatures. With each adventure, her imagination soared, and she learned that exploration could happen anywhere.

        Ella's backyard transformed into a magical land full of possibilities, encouraging her to always embrace her adventurous spirit.`
    },
    {
        name: "The Gentle River",
        content: `In a green valley flowed a gentle river named Ripple. All the animals came to drink from its refreshing waters. Ripple's kindness was known throughout the land, as he provided life to the plants and creatures around him.

        One day, a terrible storm threatened to flood the valley. Ripple worked hard to redirect the water, protecting his friends. Thanks to his efforts, all the animals could stay safe.

        Ripple understood that being gentle and caring created a beautiful world where everyone thrived together.`
    },
    {
        name: "The Painter and the Parrot",
        content: `A talented painter named Leo had a parrot named Picasso who loved to mimic colors. One day, as Leo painted a vibrant landscape, Picasso accidentally knocked over some paint, creating a splash of unexpected beauty.

        Intrigued by the accidental art, Leo decided to embrace the mess and let Picasso join him in painting. Together they created stunning masterpieces that blended their styles.

        The duo taught each other that creativity knows no boundaries, and sometimes mistakes can lead to the most beautiful creations.`
    },
    {
        name: "The Lost Kitten",
        content: `One rainy afternoon, a little girl named Sarah stumbled upon a lost kitten shivering under a bush. Without hesitation, she scooped the kitten into her arms and took it home.

        With a warm blanket, food, and plenty of love, the kitten soon regained its strength. They became inseparable friends, sharing countless adventures and cuddles.

        Sarah learned that showing compassion can change a life, and the little kitten filled her days with joy.`
    },
    {
        name: "The Cloud Painter",
        content: `In a village filled with ordinary clouds, a talented artist named Juniper dreamt of creating extraordinary cloud formations. She spent her days painting the skies with vibrant colors.

        One wonderful day, her clouds transformed into fantastic shapes of animals and flowers. The villagers gathered to marvel at her work, their spirits lifted by her creativity.

        Juniper realized it wasn't just about painting; it was about bringing happiness and inspiration to the world, one cloud at a time.`
    },
    {
        name: "The Chocolate Factory",
        content: `Tom and Lucy stumbled upon an old fabric factory that had been transformed into a chocolate wonderland. The walls were lined with candy and the air smelled of cocoa.

        They met Willy, the eccentric chocolatier, who invited them to create their own chocolates. They spent the day experimenting with flavors, shapes, and colorful decorations.

        At the end of their adventure, they learned that imagination could transform anything into something magical, especially when it came to chocolate.`
    },
    {
        name: "The Friendly Robot",
        content: `In a world filled with technology, a lonely robot named BEEP longed for a friend. He explored the city, observing humans at work and play. 

        One day, a young girl named Mia noticed BEEP and approached him. Instead of fearing him, she began to talk and shared her day. Soon, they became fast friends.

        Through their friendship, BEEP learned that connection comes from kindness, and Mia discovered the importance of accepting others, regardless of appearances.`
    },
    {
        name: "The Flower Festival",
        content: `Every spring, the village held a flower festival, but this year, the flowers were wilting. A girl named Amber decided to investigate the cause, determined to save the festival.

        She discovered that the river had dried up, affecting the flowers' growth. Amber rallied her friends to help dig a new irrigation channel, bringing life back to the flowers.

        On the day of the festival, the village celebrated not just the beauty around them but the spirit of teamwork and community that saved their cherished event.`
    },
    {
        name: "The Little Firefly",
        content: `In a dark forest, a little firefly named Flicker felt small and scared. While other fireflies glimmered brightly, Flicker struggled to shine. One night, she noticed a group of lost animals searching for their way home.

        Flicker gathered her courage and lit up, guiding the animals back safely. When the sun rose, Flicker realized her spark illuminated not just her path but helped others too.

        From that day on, Flicker embraced her glow, understanding that even the smallest light could make a difference in the darkest of times.`
    },
    {
        name: "The Glassblower's Dream",
        content: `In a quaint village, a glassblower named Felix created beautiful glass art. However, he often dreamed of making something extraordinary—a glass sculpture that would capture the hearts of all.

        One day, inspired by nature, he forged a stunning sculpture of a tree with intricately crafted leaves that shimmered in the sunlight. When people saw it, they marveled at the beauty and passion behind it.

        Felix learned that following his dreams could lead to magical creations that not only delighted others but brought fulfillment to his heart.`
    },
    {
        name: "The Secret Garden",
        content: `A boy named Max discovered a neglected garden behind an old gate in his neighborhood. Intrigued, he began to clean the space, planting seeds and watering the soil every day.

        Soon, vibrant flowers began to bloom, attracting butterflies and bumblebees. Max’s love and care transformed the once forlorn garden into a thriving paradise.

        The neighborhood children joined him, and together they learned the power of nurturing both nature and friendships, as they spent memorable days playing together in their secret garden.`
    },
    {
        name: "The Magic Dress",
        content: `Once in a bustling town, a seamstress named Eliza discovered a magical piece of fabric. Anything she sewed from it came alive with color and personality.

        She decided to create unique dresses for the town’s annual fair. As the town folk wore her dresses, they felt empowered and joyful. 

        Eliza realized her gift was not just in sewing but in helping people express themselves, making the fair a celebration of individuality and happiness.`
    },
    {
        name: "The Singing Seashell",
        content: `On a serene beach, a girl named Nora found a colorful seashell that emitted enchanting melodies when held to her ear. Fascinated, Nora learned that the shell held the ocean's ancient songs.

        As she shared the shell’s magic with her friends, they danced and laughed, filled with joy. The music echoed far and wide, attracting travelers who marveled at its beauty.

        Nora discovered that sharing joy and love could spread happiness far beyond her little seaside home, like ripples in the ocean.`
    },
    {
        name: "The Starlit Sky",
        content: `On a clear night, a boy named Sam wished to touch the stars. One night, he climbed his favorite hill to gaze at the twinkling sky, dreaming of adventures and exploration.

        Suddenly, a friendly star descended and landed beside him. The star told Sam stories of distant galaxies and cosmic wonders. Inspired, Sam realized he could reach for his dreams, no matter how far away they seemed.

        With that star always shining in his heart, Sam embraced every opportunity, turning his dreams into reality.`
    },
    {
        name: "The Kindness Jar",
        content: `Ella wanted to spread kindness in her school, so she created a 'Kindness Jar.' Every time someone did something nice, they would write it down and drop it in the jar.

        The jar quickly filled with notes, reminding everyone of the positive acts happening around them. Inspired, students began doing even more kind gestures, creating a ripple effect of goodness.

        Ella learned that kindness, no matter how small, can multiply and transform a community, making it a brighter, happier place.`
    },
    {
        name: "The Caterpillar's Transformation",
        content: `Once in a sunny meadow, a little caterpillar named Coco dreamed of flying. All her friends laughed and told her, “Caterpillars can’t fly!”

        Undeterred, Coco spun her cocoon and patiently waited. After a while, she emerged as a stunning butterfly, dazzling with brilliant colors.

        Her transformation inspired everyone, proving that belief in oneself and patience could lead to beautiful changes and dreams coming true.`
    },
    {
        name: "The Little Chef",
        content: `In a cozy kitchen, a boy named Leo loved cooking with his grandmother. One day, they decided to host a neighborhood potluck, inviting everyone to share delicious recipes.

        Leo learned about different cultures and flavors as he prepared dishes with his friends and neighbors. The potluck turned into a joyful celebration of food, laughter, and stories.

        Through the love of cooking, Leo discovered that meals could bring people together, creating bonds that nourished both body and spirit.`
    },
    {
        name: "The Friendship Tree",
        content: `Two girls, Amy and Grace, became friends while playing under a large oak tree. They shared secrets, dreams, and laughter during countless sunny days.

        As they grew older, the tree became their special place where they celebrated birthdays and achievements. One day, they decided to plant another tree to symbolize their friendship.

        Years later, the two girls returned as adults, finding their friendship and the tree flourishing, a reminder that true bonds endure the test of time.`
    },
    {
        name: "The Magical Violin",
        content: `A shy girl named Lucy discovered an old violin in her attic that belonged to her grandmother. When she played it, the sweetest melodies filled the air, captivating anyone who listened.

        Encouraged by her family, Lucy began performing at local events. Her music brought joy to everyone and created a sense of community.

        Lucy realized that her gift of music not only expressed her emotions but united people through the universal language of melody.`
    },
    {
        name: "The Last Leaf",
        content: `In a small town, a girl named Amelia noticed a tree shedding its leaves in autumn. She wanted to preserve its beauty, so she decided to paint the last leaf before it fell.

        As she painted, she realized that change is a natural part of life. The last leaf taught her that every ending brings a new beginning and that beauty can be found in the passage of time.

        With this wisdom, Amelia embraced life's seasons, knowing that each one held its own unique beauty.`
    }
];


function pickRandomStory() {
    const randomIndex = Math.floor(Math.random() * stories.length);
    const selectedStory = stories[randomIndex];

    // Set the name of the story
    document.getElementById('Result').innerHTML = selectedStory.name;

    const storyElement = document.getElementById('story');

    // Clear previous story content
    storyElement.innerHTML = '';
    
    // Define the typing animation
    const typingAnimation = anime({
        targets: storyElement,
        innerHTML: [0, selectedStory.content.length], // Animate from 0 to the length of the content
        easing: 'linear', // Easing: linear gives a constant speed
        duration: 5000, // Total duration of the typing effect (change as needed)
        round: 1, // Round the output value to nearest whole number
        update: function(anim) {
            const sliceEnd = Math.round(anim.progress / 100 * selectedStory.content.length);
            storyElement.innerHTML = selectedStory.content.slice(0, sliceEnd);
            // Force a reflow/repaint
            storyElement.style.display = 'none';
            storyElement.offsetHeight;  // Trigger reflow
            storyElement.style.display = 'flex'; // Reset to the original style
        },
    
    });
}