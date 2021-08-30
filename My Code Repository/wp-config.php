<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u269816757_BVEED' );

/** MySQL database username */
define( 'DB_USER', 'u269816757_KwKwH' );

/** MySQL database password */
define( 'DB_PASSWORD', 'lnY4XE7aoX' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'oFDmd:@dQ-eTTB_|?-nB(9ntt!FoW!}D~Pl3~fF+T.svVDK!& +35G<9%.pVOHb+' );
define( 'SECURE_AUTH_KEY',   'W}-/j=ca`Dm3mSIdeJ21^t5#ruTrDml_3]Wr&<i~i,tEl|Y@XJn2|6n)=&EOFLPG' );
define( 'LOGGED_IN_KEY',     'kq1)2)#CGzj[vK;$i;7wdy`%a=la~(YPK+TbyucMaF^a8E3znfQ(C#vl1Ei]hgEV' );
define( 'NONCE_KEY',         'f`boAx~SXEF.]9%CrvOeA%@ir+xxO_dPRF=jCdx/xR22Sh0N=[Di2nZHOLlV]1OR' );
define( 'AUTH_SALT',         'vl8G~ZTMs`Y%<L[FK*B<4sg/=Y5L6r}8]nydgzeubKC.JV(sK@BH!w9RVhe8zbF0' );
define( 'SECURE_AUTH_SALT',  '#R ^sXWtUV.*.@nJs*9j9xz~<$DZas];oim$-S(SkXl0-=- ]7PoR1qdL{;sbm]u' );
define( 'LOGGED_IN_SALT',    '3,gMK>txL@-nvuz|5U>9@XPUsZ$zi$.PeF#sw]ghYqE^I%W9Q`*|=)3.6}da@`bw' );
define( 'NONCE_SALT',        '}s?r--_8iP)sh0+YwxAt*pMOC} Y#/92cx4=4}}V%LcFvtAnbV@+21V.1 PAqxqx' );
define( 'WP_CACHE_KEY_SALT', 'J$D$e,S2aA&>9d1Dl`MH4{&,}I*W-oNVHUI(J`rV?_o=ea6olp8mnJKZB8(JP8<?' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




define( 'WP_AUTO_UPDATE_CORE', true );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
