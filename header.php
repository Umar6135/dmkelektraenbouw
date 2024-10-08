<!DOCTYPE html>
<html lang="de">

<head>
    <?php
    if ($GLOBALS['title']) {
        $title = $GLOBALS['title'];
    } else {
        $GLOBALS['title'] = "";
    }
    if ($GLOBALS['desc']) {
        $desc = $GLOBALS['desc'];
    } else {
        $desc = "";
    }
    if ($GLOBALS['keywords']) {
        $keywords = $GLOBALS['keywords'];
    } else {
        $keywords = "";
    } ?>

    <title>
        <?php echo $title; ?>
    </title>
    <meta name="keywords" content="<?php echo $keywords; ?>">
    <meta name="description" content="<?php echo $desc ?>" />
    <meta charset="utf-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/aos.css">
    <link rel="stylesheet" href="./assets/css/magnific-popup.css">
    <link rel="stylesheet" href="./assets/css/owl-carousal.css">
    <link rel="stylesheet" href="./assets/css/dropzone.css">
    <link rel="stylesheet" href="./assets/css/style.min.css">



    <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/favicon-32x32.png">



</head>

<body>



   <!-- top-bar  -->
   <div class="top-bar">
        <div class="container">
            <div class="row align-item-center">
                <div class="col-6">
                    <img src="./assets/img/top-bar.png" width="150" height="30" class="h-auto" alt="">
                </div>
                <div class="col-6">
                    <div class="top-bar-content">
                        <a href="./werken-bij.php">Working at</a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- header  -->
    <header>
        <nav class="navbar navbar-expand-lg ">
            <div class="container">
                <a class="navbar-brand" href="./index.php"><img src="./assets/img/logo.png" alt="" class="h-auto" width="190" height="49" aria-label="logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="bars fa-solid fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./index.php">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./about.php">Over ons</a>
                        </li>
                        <li class="nav-item dropdown mega-dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dienstenDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Diensten
                            </a>
                            <div class="dropdown-menu mega-menu p-4" aria-labelledby="dienstenDropdown">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <h6><a href="./elektra-aanleggen.php">Elektra aanleggen</a></h6>
                                        <ul class="list-unstyled">
                                            <li><a class="dropdown-item" href="./krachtstroom-aanleggen.php">Krachtstroom aanleggen</a></li>
                                            <li><a class="dropdown-item" href="./aardlekschakelaar-vervangen.php">Aardlekschakelaar vervangen</a></li>
                                            <li><a class="dropdown-item" href="./perilex-aansluiting.php">Perilex aansluiting</a></li>
                                            <li><a class="dropdown-item" href="./zonnepanelen-aansluiten.php">Zonnepanelen aansluiten</a></li>
                                            <li><a class="dropdown-item" href="./stopcontact-aansluiten.php">Stopcontact aansluiten</a></li>
                                            <li><a class="dropdown-item" href="./laadpaal-installeren.php">Laadpaal installeren</a></li>
                                            <li><a class="dropdown-item" href="./elektra-renoveren.php"> Elektra renoveren</a></li>

<li><a class="dropdown-item" href="./inductiekookplaat-aansluiten.php">Inductiekookplaat aansluiten</a></li>
<li><a class="dropdown-item" href="./tuinverlichting-aanleggen.php">Tuinverlichting aanleggen</a></li>
<li><a class="dropdown-item" href="./utiliteitsbouw-elektrotechniek.php">Utiliteitsbouw elektrotechniek</a></li>
<li><a class="dropdown-item" href="./rookmelder-plaatsen.php">​​Rookmelder plaatsen</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-4">
                                        <h6><a href="./meterkast.php">Meterkast</a></h6>
                                        <ul class="list-unstyled">
                                        <li><a class="dropdown-item" href="./groepenkast-vervangen.php">Groepenkast vervangen</a></li>
                                                <li><a class="dropdown-item" href="./meterkast-vervangen.php">Meterkast vervangen</a></li>
                                                <li><a class="dropdown-item" href="./elektra-aanleggen.php">Extra groep aanleggen</a></li>
                                                <li><a class="dropdown-item" href="./3-fase-aansluiting.php">3 Fase aansluiting</a></li>

                                            
                                            
                                        </ul>
                                    </div>
                                    <div class="col-lg-4">
                                        <h6><a href="./storingsdienst.php">Storingen</a></h6>
                                        <ul class="list-unstyled">
                                            <li><a class="dropdown-item" href="./kortsluiting.php">Kortsluiting</a></li>
                                            <li><a class="dropdown-item" href="./storingsdienst.php">Storingsdienst</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./faq.php">FAQ</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="./commercial.php">Zakelijk</a>
                        </li>


                        <li class="nav-item">
                            <a class="nav-link" href="./#reviews">Reviews</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="./contact.php">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link" aria-label="america-flag">
                                <img src="./assets/img/america-flag.png" alt="" width="18" height="12">
                            </a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <a href="tel:0851107653" class="theme-btn orange"><span><i class="fa-solid fa-phone"></i></span>
                            085-1107653</a>
                    </form>
                </div>
            </div>
        </nav>
    </header>



    <!-- properties-bar -->
    <div class="properties-bar">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-6">
                    <div class="properties-item">
                        <span><img src="./assets/img/check.png" width="15" height="15" alt=""></span>
                        <p>20+ jaar ervaring</p>
                    </div>
                </div>
                <div class="col-lg-3 col-6 d-none d-lg-block">
                    <div class="properties-item ">
                        <span><img src="./assets/img/check.png" width="15" height="15" alt=""></span>
                        <p>24/7 spoedhulp</p>
                    </div>
                </div>
                <div class="col-lg-3 col-6 d-none d-lg-block">
                    <div class="properties-item ">
                        <span><img src="./assets/img/check.png" width="15" height="15" alt=""></span>
                        <p>
                            100% Transparantie</p>
                    </div>
                </div>
                <div class="col-lg-3 col-6">
                    <div class="properties-item justify-content-end">
                        <span><img src="./assets/img/properties-bar.png" class="h-auto" width="25" height="12" alt=""></span>
                        <p>Bekend van TV</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
