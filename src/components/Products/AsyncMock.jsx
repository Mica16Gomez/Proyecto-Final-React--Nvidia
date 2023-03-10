const products = [
    {
      id: 1,
      categoria: "Laptops",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672363983/imagesNvdia/Laptop_gamer_ASUS_TUF_F15_1_pbs4e7.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672364205/imagesNvdia/Laptop_gamer_ASUS_TUF_F15_2_hnursn.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672364205/imagesNvdia/Laptop_gamer_ASUS_TUF_F15_3_ybhuau.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672364205/imagesNvdia/Laptop_gamer_ASUS_TUF_F15_4_iwzsvo.avif",
      nombre: "Laptop gamer ASUS TUF F15",
      descripcion:
        "Laptop gamer ASUS TUF F15 15.6 pulgadas Full HD Intel Core i5 NVIDIA GeForce RTX 3050 8 GB RAM 512 GB SSD",
      sku: "1115216887",
      pReal: 29999,
      pDescuento: 25199,
      stock: 3,
    },
    {
      id: 2,
      categoria: "Laptops",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672429954/imagesNvdia/Laptop_Gamer_Dell_NB_G15_1_myzxn6.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672429954/imagesNvdia/Laptop_Gamer_Dell_NB_G15_2_r8ound.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672429954/imagesNvdia/Laptop_Gamer_Dell_NB_G15_3_s87cjk.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672429954/imagesNvdia/Laptop_Gamer_Dell_NB_G15_4_dnassc.avif",
      nombre: "Laptop Gamer Dell NB G15",
      descripcion:
        "Laptop Gamer Dell NB G15 5511 15.6 pulgadas Full HD Intel Core i7 NVIDIA GeForce RTX 3050 8 GB RAM 512 GB SSD + Mochila",
      sku: "1122883830",
      pReal: 30499,
      pDescuento: 27449,
      stock: 4,
    },
    {
      id: 3,
      categoria: "Laptops",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441231/imagesNvdia/3-10/Laptop_gamer_HP_Omen_16_1_gpvpf1.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441231/imagesNvdia/3-10/Laptop_gamer_HP_Omen_16_2_ycicax.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441231/imagesNvdia/3-10/Laptop_gamer_HP_Omen_16_2_ycicax.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441230/imagesNvdia/3-10/Laptop_gamer_HP_Omen_16_4_cpurzk.avif",
      nombre: "Laptop gamer HP Omen 16-b0511la",
      descripcion:
        "Laptop gamer HP Omen 16-b0511la 16 pulgadas Full HD NVIDIA GeForce RTX 3050 Intel Core i7 8 GB RAM 512 GB SSD",
      sku: "1121731092",
      pReal: 36579,
      pDescuento: 32921,
      stock: 2,
    },
    {
      id: 4,
      categoria: "Laptops",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441230/imagesNvdia/3-10/Laptop_Gamer_Lenovo_Legion_5i_1_jdllm0.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441230/imagesNvdia/3-10/Laptop_Gamer_Lenovo_Legion_5i_2_vq0frm.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441230/imagesNvdia/3-10/Laptop_Gamer_Lenovo_Legion_5i_3_dqjmiu.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441230/imagesNvdia/3-10/Laptop_Gamer_Lenovo_Legion_5i_4_tj0moa.avif",
      nombre: "Laptop Gamer Lenovo Legion 5i",
      descripcion:
        "Laptop Gamer Lenovo Legion 5i 15.6 Pulgadas Full HD Intel Core i5 NVIDIA RTX 2060 8 GB 512 GB SSD",
      sku: "1102206165",
      pReal: 33999,
      pDescuento: 30599,
      stock: 3,
    },
    {
      id: 5,
      categoria: "Laptops",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441230/imagesNvdia/3-10/Laptop_gamer_MSI_Raider_GE76_1_hqfns9.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441230/imagesNvdia/3-10/Laptop_gamer_MSI_Raider_GE76_3_pkh7z2.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441230/imagesNvdia/3-10/Laptop_gamer_MSI_Raider_GE76_2_cx4uvj.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441230/imagesNvdia/3-10/Laptop_gamer_MSI_Raider_GE76_4_rf8bdk.avif",
      nombre: "Laptop gamer MSI Raider GE76",
      descripcion:
        "Laptop gamer MSI Raider GE76 12UH-468MX 17.3 pulgadas 4K/Ultra HD NVIDIA GeForce RTX 3080 Intel Core i7 32 GB RAM 1 TB SSD",
      sku: "1119534441",
      pReal: 110999,
      pDescuento: 94904,
      stock: 8,
    },
    {
      id: 6,
      categoria: "Laptops",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441230/imagesNvdia/3-10/Laptop_gamer_HP_Victus_15_1_mpn3om.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Laptop_gamer_HP_Victus_15_2_lcwieq.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Laptop_gamer_HP_Victus_15_3_tbk7ri.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Laptop_gamer_HP_Victus_15_4_ms18rx.avif",
      nombre: "Laptop gamer HP Victus 15",
      descripcion:
        "Laptop gamer HP Victus 15-fb0106la 15.6 pulgadas Full HD NVIDIA GeForce GTX 1650 Ryzen 5 8 GB RAM 256 GB SSD",
      sku: "1122774755",
      pReal: 23669,
      pDescuento: 21302,
      stock: 22,
    },
    {
      id: 7,
      categoria: "Laptops",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Laptop_Gamer_Dell_NV9RD_15.6_1_ivydar.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Laptop_Gamer_Dell_NV9RD_15.6_2_splexs.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Laptop_Gamer_Dell_NV9RD_15.6_3_uft69a.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Laptop_Gamer_Dell_NV9RD_15.6_4_yk6zgo.avif",
      nombre: "Laptop Gamer Dell NV9RD 15.6",
      descripcion:
        "Laptop Gamer Dell NV9RD 15.6 Pulgadas Full HD Intel Core i5 Nvidia GeForce GTX 1660 Ti 8 GB RAM 512 GB SSD",
      sku: "1124749413",
      pReal: 29999,
      pDescuento: 28999,
      stock: 4,
    },
    {
      id: 8,
      categoria: "Laptops",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Laptop_Gamer_XPG_1_yicphk.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Laptop_Gamer_XPG_2_s0pdty.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Laptop_Gamer_XPG_3_cuvoey.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Laptop_Gamer_XPG_4_vrilwh.avif",
      nombre: "Laptop Gamer XPG",
      descripcion:
        "Laptop Gamer XPG XENIA14I7G11GXELX-BKCMX Full HD 14 Pulgadas Intel Core i7 Intel Iris XE 16 GB RAM 512 GB SSD ",
      sku: "1127745061",
      pReal: 24899,
      pDescuento: 19439,
      stock: 3,
    },
    {
      id: 9,
      categoria: "Monitores",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Monitor_gamer_LG_QHD_1_bosg5a.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441229/imagesNvdia/3-10/Monitor_gamer_LG_QHD_2_wrgqme.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441228/imagesNvdia/3-10/Monitor_gamer_LG_QHD_3_mx4fdx.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441228/imagesNvdia/3-10/Monitor_gamer_LG_QHD_4_vgxqmy.avif",
      nombre: "Monitor gamer LG QHD",
      descripcion: "Monitor gamer LG QHD 34 pulgadas 34GN850-B.AWM",
      sku: "1098095116",
      pReal: 27999,
      pDescuento: 22399,
      stock: 5,
    },
    {
      id: 10,
      categoria: "Monitores",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441228/imagesNvdia/3-10/Monitor_gamer_LG_WQHD_34_1_dkwcce.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441228/imagesNvdia/3-10/Monitor_gamer_LG_WQHD_34_2_z2v7ev.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441228/imagesNvdia/3-10/Monitor_gamer_LG_QHD_3_mx4fdx.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672441228/imagesNvdia/3-10/Monitor_gamer_LG_WQHD_34_3_v0hipb.avif",
      nombre: "Monitor gamer LG WQHD 34",
      descripcion: "Monitor gamer LG WQHD 34 pulgadas 34WP65C-B.AWM",
      sku: "1121354141",
      pReal: 16999,
      pDescuento: 13599,
      stock: 8,
    },
    {
      id: 11,
      categoria: "Monitores",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449426/imagesNvdia/11-24/Monitor_Samsung_WQHD_34_1_tx06zn.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449426/imagesNvdia/11-24/Monitor_Samsung_WQHD_34_2_zzu65l.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449426/imagesNvdia/11-24/Monitor_Samsung_WQHD_34_3_zn21pe.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449426/imagesNvdia/11-24/Monitor_Samsung_WQHD_34_4_pnriid.avif",
      nombre: "Monitor Samsung WQHD 34",
      descripcion: "Monitor Samsung WQHD 34 pulgadas CH89",
      sku: "1118965058",
      pReal: 17999,
      pDescuento: 15279,
      stock: 2,
    },
    {
      id: 12,
      categoria: "Monitores",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449426/imagesNvdia/11-24/Monitor_gamer_Dell_WQHD_34_1_adhyxu.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449426/imagesNvdia/11-24/Monitor_gamer_Dell_WQHD_34_2_jwcawc.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449425/imagesNvdia/11-24/Monitor_gamer_Dell_WQHD_34_3_xaeymi.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449425/imagesNvdia/11-24/Monitor_gamer_Dell_WQHD_34_4_gwyar2.avif",
      nombre: "Monitor gamer Dell WQHD 34",
      descripcion: "Monitor gamer Dell WQHD 34 pulgadas S3422DWG",
      sku: "1120633275",
      pReal: 17250,
      pDescuento: 14979,
      stock: 1,
    },
    {
      id: 13,
      categoria: "Monitores",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449426/imagesNvdia/11-24/Monitor_gamer_MSI_QHD_32_1_tggk7c.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449425/imagesNvdia/11-24/Monitor_gamer_MSI_QHD_32_2_sdr8u2.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449426/imagesNvdia/11-24/Monitor_gamer_MSI_QHD_32_3_dhcrp6.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672449426/imagesNvdia/11-24/Monitor_gamer_MSI_QHD_32_4_a3gmqw.avif",
      nombre: "Monitor gamer MSI QHD 32",
      descripcion: "Monitor gamer MSI QHD 32 pulgadas Optix G32CQ4",
      sku: "1119002334",
      pReal: 12399,
      pDescuento: 10999,
      stock: 3,
    },
    {
      id: 14,
      categoria: "Monitores",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450041/imagesNvdia/11-24/Monitor_LG_4K_Ultra_HD_27_1_siiqga.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450041/imagesNvdia/11-24/Monitor_LG_4K_Ultra_HD_27_2_o78gjd.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450041/imagesNvdia/11-24/Monitor_LG_4K_Ultra_HD_27_3_gc2z2z.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450041/imagesNvdia/11-24/Monitor_LG_4K_Ultra_HD_27_4_nrjr0z.avif",
      nombre: "Monitor LG 4K Ultra HD 27",
      descripcion: "Monitor LG 4K/Ultra HD 27 pulgadas 27UK580-B.AWM",
      sku: "1121353501",
      pReal: 11999,
      pDescuento: 11399,
      stock: 2,
    },
    {
      id: 15,
      categoria: "Monitores",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450041/imagesNvdia/11-24/Monitor_Dell_Full_HD_24.5_pulgadas_1_krpvfr.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450041/imagesNvdia/11-24/Monitor_Dell_Full_HD_24.5_pulgadas_2_hvr1cm.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450041/imagesNvdia/11-24/Monitor_Dell_Full_HD_24.5_pulgadas_3_imizqf.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450040/imagesNvdia/11-24/Monitor_Dell_Full_HD_24.5_pulgadas_4_m98n0e.avif",
      nombre: "Monitor Dell Full HD 24.5 pulgadas",
      descripcion: "Monitor Dell Full HD 24.5 pulgadas AW2521HF",
      sku: "1134514788",
      pReal: 17599,
      pDescuento: 13079,
      stock: 1,
    },
    {
      id: 16,
      categoria: "Monitores",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450040/imagesNvdia/11-24/Monitor_gamer_Asus_WQHD_34_1_fywf2t.avif",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450040/imagesNvdia/11-24/Monitor_gamer_Asus_WQHD_34_2_xpvnkn.avif",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450040/imagesNvdia/11-24/Monitor_gamer_Asus_WQHD_34_3_uyudac.avif",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450040/imagesNvdia/11-24/Monitor_gamer_Asus_WQHD_34_4_kqajj6.avif",
      nombre: "Monitor gamer Asus WQHD 34",
      descripcion: "Monitor gamer Asus WQHD 34 pulgadas VP348QGL",
      sku: "1122122111",
      pReal: 13999,
      pDescuento: 11339,
      stock: 5,
    },
    {
      id: 17,
      categoria: "Tarjetas Graficas",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450040/imagesNvdia/11-24/Zotac_Gaming_GeForce_RTX_3090_Ti_2_muoblz.jpg",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450040/imagesNvdia/11-24/Zotac_Gaming_GeForce_RTX_3090_Ti_3_w2zo4l.jpg",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450040/imagesNvdia/11-24/Zotac_Gaming_GeForce_RTX_3090_Ti_1_djuivf.jpg",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450040/imagesNvdia/11-24/Zotac_Gaming_GeForce_RTX_3090_Ti_4_ie2erx.jpg",
      nombre: "Zotac Gaming GeForce RTX??? 3090 Ti",
      descripcion:
        "Zotac Gaming GeForce RTX??? 3090 Ti AMP Extreme Holo 24GB GDDR6X 384-bit 21 Gbps PCIE 4.0 Tarjeta gr??fica para Juegos, HoloBlack, IceStorm 2.0 Advanced Cooling, Spectra 2.0 RGB Lighting, ZT-A30910B-10P",
      sku: "ZT-A30610E-10MLHR",
      pReal: 47433.54,
      pDescuento: 41799,
      stock: 6,
    },
    {
      id: 18,
      categoria: "Tarjetas Graficas",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450586/imagesNvdia/11-24/RTX_4090_RTX4090_GDDR6X_NVIDIA_2_xbiikd.webp",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450586/imagesNvdia/11-24/RTX_4090_RTX4090_GDDR6X_NVIDIA_1_hdyaqa.webp",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/RTX_4090_RTX4090_GDDR6X_NVIDIA_3_j3dqtg.webp",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/RTX_4090_RTX4090_GDDR6X_NVIDIA_4_rjthgr.webp",
      nombre: "INNO3D-tarjeta RTX 4090 RTX4090",
      descripcion:
        "INNO3D-tarjeta gr??fica RTX 4090 RTX4090 GDDR6X NVIDIA GPU 4nm 24GB 384Bit 12Pin, placa de v??deo para videojuegos",
      sku: "ZT-A30800D-10PLHR",
      pReal: 66274.86,
      pDescuento: 46392.4,
      stock: 2,
    },
    
    {
      id: 19,
      categoria: "Tarjetas Graficas",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/MSI_GeForce_RTX_3080_GAMING_Z_TRIO_10G_2_ux70ub.webp",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/MSI_GeForce_RTX_3080_GAMING_Z_TRIO_10G_1_if9ame.webp",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/MSI_GeForce_RTX_3080_GAMING_Z_TRIO_10G_2_ux70ub.webp",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/MSI_GeForce_RTX_3080_GAMING_Z_TRIO_10G_3_q00qvl.webp",
      nombre: "MSI GeForce RTX 3080 GAMING Z TRIO 10G",
      descripcion:
        "Tarjeta de Video MSI GeForce RTX 3080 GAMING Z TRIO 10G GDDR6X MSI GEFORCE RTX 3080 GAMING Z TRIO 10G LHR",
      sku: "ZT-A30810D-10P",
      pReal: 21000,
      pDescuento: 18999,
      stock: 5,
    },
    {
      id: 20,
      categoria: "Tarjetas Graficas",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/Tarjeta_de_Video_Nvidia_GeForce_RTX_3070_3_emqqgy.webp",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/Tarjeta_de_Video_Nvidia_GeForce_RTX_3070_4_cdiccy.webp",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/Tarjeta_de_Video_Nvidia_GeForce_RTX_3070_2_jwffy5.webp",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/Tarjeta_de_Video_Nvidia_GeForce_RTX_3070_1_wnpohz.webp",
      nombre: "Tarjeta de Video Nvidia GeForce RTX 3070",
      descripcion:
        "Tarjeta de Video Nvidia GeForce RTX 3070 8GB / PNY Dual Fan / VCG30708LDFMPB",
      sku: "TUF-RTX3070TI-O8G-GAMING",
      pReal: 14250,
      pDescuento: 13699,
      stock: 3,
    },
    {
      id: 21,
      categoria: "Tarjetas Graficas",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/EVGA_GeForce_RTX_2060_SC_6GB_2_hkzam3.webp",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450585/imagesNvdia/11-24/EVGA_GeForce_RTX_2060_SC_6GB_1_xvfakg.webp",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450584/imagesNvdia/11-24/EVGA_GeForce_RTX_2060_SC_6GB_3_ljxdny.webp",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450584/imagesNvdia/11-24/EVGA_GeForce_RTX_2060_SC_6GB_4_dzroxy.webp",
      nombre: "EVGA GeForce RTX 2060 SC 6GB",
      descripcion:
        "Tarjeta de Video EVGA GeForce RTX 2060 SC 6GB GDDR6 06G-P4-2062-KR EVGA RTX 2060 SC",
      sku: "NE63060019K9-190AD",
      pReal: 11560,
      pDescuento: 8099,
      stock: 2,
    },
    {
      id: 22,
      categoria: "Tarjetas Graficas",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450584/imagesNvdia/11-24/ASUS_KO_Geforce_RTX_3060_TI_OC_V2_8GB_2_lvtie9.webp",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450584/imagesNvdia/11-24/ASUS_KO_Geforce_RTX_3060_TI_OC_V2_8GB_1_undxt4.webp",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450584/imagesNvdia/11-24/ASUS_KO_Geforce_RTX_3060_TI_OC_V2_8GB_3_hmv3jr.webp",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672450584/imagesNvdia/11-24/ASUS_KO_Geforce_RTX_3060_TI_OC_V2_8GB_3_1_s0re2b.webp",
      nombre: "ASUS KO Geforce RTX 3060 TI OC V2 8GB",
      descripcion:
        "Tarjeta de Video ASUS KO Geforce RTX 3060 TI OC V2 8GB GDDR6 LHR KO-RTX3060TI-O8G-V2-GAMING Asus KO-RTX3060TI-O8G-V2-GAMING",
      sku: "NE63070019P2-1041A",
      pReal: 15600,
      pDescuento: 12599,
      stock: 1,
    },
    {
      id: 23,
      categoria: "Tarjetas Graficas",
      img: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672451550/imagesNvdia/11-24/ASUS_Dual_GeForce_RTX_3050_OC_Edition_8GB_3_quzer8.webp",
      img2: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672451550/imagesNvdia/11-24/ASUS_Dual_GeForce_RTX_3050_OC_Edition_8GB_4_iaxah3.webp",
      img3: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672451550/imagesNvdia/11-24/ASUS_Dual_GeForce_RTX_3050_OC_Edition_8GB_2_fimc7s.webp",
      img4: "https://res.cloudinary.com/dqwvxeuoh/image/upload/v1672451550/imagesNvdia/11-24/ASUS_Dual_GeForce_RTX_3050_OC_Edition_8GB_1_elubug.webp",
      nombre: "ASUS Dual GeForce RTX 3050 OC Edition 8GB",
      descripcion:
        "Tarjeta de Video ASUS Dual GeForce RTX 3050 OC Edition 8GB GDDR6 DUAL-RTX3050-O8G Asus DUAL-RTX3050-O8G",
      sku: "ZT-A30900D-10P",
      pReal: 10200,
      pDescuento: 9999,
      stock: 3,
    },
  ];
  

  
  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.find(product => product.id === id));
      }, 1500);
    });
  };