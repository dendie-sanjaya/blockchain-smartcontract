// PropertyPrice.sol
pragma solidity ^0.8.0;

// Kontrak untuk menyimpan Harga Properti
contract PropertyPrice {
    // State Variable: Harga properti dalam format angka
    uint256 public fixedPrice = 5000; 

    // Fungsi ini akan Anda panggil di Node.js untuk mengambil data
    function getPrice() public view returns (uint256) {
        return fixedPrice;
    }
}