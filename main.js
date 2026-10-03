// ============================================================================
// BÀI TẬP TỔNG HỢP: QUẢN TRỊ MẢNG TRẠM SẠC TOÀN TRÌNH
// ============================================================================

// 1. Khởi tạo hàng đợi ban đầu
const queue = ["30A-111", "29B-222", "51C-333"];
console.log("1. Trạng thái hàng đợi ban đầu:");
console.log(queue);
console.log("--------------------------------------------------");

// 2. Tiếp nhận xe mới đến và đưa vào cuối hàng đợi (push)
queue.push("43D-444");
console.log("2. Có xe mới đến. Trạng thái hàng đợi sau khi thêm (push):");
console.log(queue);
console.log("--------------------------------------------------");

// 3. Chèn xe ưu tiên vào vị trí chỉ định - chỉ số 1 (splice)
// Tham số: vị trí chèn (1), số phần tử xóa (0), phần tử thêm vào ('14A-999')
queue.splice(1, 0, "14A-999");
console.log(
  "3. Xe ưu tiên xuất hiện. Trạng thái hàng đợi sau khi chèn (splice) vào index 1:",
);
console.log(queue);
console.log("--------------------------------------------------");

// (Tùy chọn bổ sung để vận dụng đủ indexOf và includes theo mục tiêu bài học)
// Kiểm tra vị trí của xe '29B-222' trong hàng đợi
const searchCar = "29B-222";
if (queue.includes(searchCar)) {
  const indexPos = queue.indexOf(searchCar);
  console.log(
    `[*] Tìm kiếm: Xe ${searchCar} hiện đang nằm ở chỉ số (index): ${indexPos}`,
  );
  console.log("--------------------------------------------------");
}

// 4. Xe đầu tiên được điều phối vào cổng sạc (shift)
const chargingCar = queue.shift();
console.log(`4. Đã gọi xe [${chargingCar}] vào trụ sạc.`);
console.log("   Trạng thái hàng đợi hiện tại sau khi lấy xe đầu tiên (shift):");
console.log(queue);
console.log("--------------------------------------------------");

// 5. Tính toán tiền ca trực dựa trên mảng điện năng tiêu thụ
const kwhArray = [30, 45, 25];
const unitPrice = 4500;
let totalKwh = 0;

// Duyệt mảng để tính tổng sản lượng
for (let i = 0; i < kwhArray.length; i++) {
  totalKwh += kwhArray[i];
}

const totalRevenue = totalKwh * unitPrice;

console.log("5. TỔNG KẾT BÁO CÁO CA TRỰC:");
console.log(`   - Tổng điện năng tiêu thụ: ${totalKwh} kWh`);
console.log(`   - Đơn giá: ${unitPrice} VNĐ/kWh`);
console.log(
  `   - Tổng doanh thu ca trực: ${totalRevenue.toLocaleString("vi-VN")} VNĐ`,
);
