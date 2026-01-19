const daySelect = document.getElementById("daySelect");
const slotSelect = document.getElementById("slotSelect");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const submitBtn = document.getElementById("submitBtn");

// Day wise slots
const slotsByDay = {
  monday: [
    "Dalui's Clinic - 7:30 am to 9:00 am - Balitikuri Naskarpara Kalitala Howrah",
    "Shyamashree Medical - 5:30 pm to 6:30 pm - Kadamtala",
    "KHK diagnostic centre - 6:30 pm to 7:30 pm - Kamardanga",
    "Dutta Medical - 7:30 pm to 8:00 pm - Benaras road",
    "Sunrise Medical - 8:00 pm to 9:00 pm - CTI",
    "Mal medico - 9:00 pm to 10:00 pm - Balitikuri Tarun Dal Club",
  ],
  tuesday: [
    "Dalui's Clinic - 7:30 am to 9:00 am - Balitikuri Naskarpara Kalitala Howrah",
    "Sanjivani - 5:00 pm to 6:00 pm - Kasba Bosepukur, Kolkata",
    "Aastha diagnostic - 6:30 pm to 7:30 pm - CTI",
    "Lakhotia Madhya khalia - 7:30 pm to 8:00 pm - Madhya khalia",
    "Recovery plus - 8:00 pm to 9:30 pm - Salap more",
    "Other",
  ],
  wednesday: [
    "Dalui's Clinic - 7:30 am to 9:00 am - Balitikuri Naskarpara Kalitala Howrah",
    "Ramkrishna Polyclinic - 6:00 pm to 7:30 pm - Belgachia Rathtala Howrah",
    "Madison - 7:30 pm to 8:30 pm - Kona bag para",
    "Dutta Medical - 8:30 pm to 9:30 pm - Benaras road",
    "Mal medico - 9:30 pm to 10:30 pm - Balitikuri Tarun dal club",
  ],
  thursday: [
    "Dalui's Clinic - 7:30 am to 9:00 am - Balitikuri Naskarpara Kalitala Howrah",
    "Sanjivani - 5:00 pm to 6:00 pm - Kasba Bosepukur Kolkata",
    "Sunrise Medical - 6:30 pm to 7:30 pm - CTI",
    "Lakhotia Madhya khalia - 7:30 pm to 8:00 pm - Madhya khalia",
    "Recovery plus - 8:00 pm to 9:30 pm - Salap more",
  ],
  friday: [
    "Dalui's Clinic - 7:30 am to 9:00 am - Balitikuri Naskarpara Kalitala Howrah",
  ],
  saturday: [
    "KHK diagnostic centre - 5:00 pm to 6:00 pm - Kamardanga",
    "Madison - 6:00 pm to 8:00 pm - Kona bag para",
    "Dutta Medical - 8:00 pm to 9:00 pm - Benaras road CTI more",
    "Mal medico - 9:00 pm to 10:00 pm - Balitikuri Tarun Dal Club",
  ],
  sunday: [
    "Dalui's Clinic - 9:30 am to 11:00 am - Balitikuri Naskarpara Kalitala Howrah",
  ],
};

// Day change logic
daySelect.addEventListener("change", () => {
  const selectedDay = daySelect.value;
  slotSelect.innerHTML = "";

  if (!selectedDay) {
    slotSelect.innerHTML = `<option value="">Choose one day slot</option>`;
    return;
  }

  const dayName = selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1);

  const placeholder = document.createElement("option");
  placeholder.textContent = `Choose one slot in ${dayName}`;
  placeholder.value = "";
  placeholder.disabled = true;
  placeholder.selected = true;
  slotSelect.appendChild(placeholder);

  slotsByDay[selectedDay].forEach((slot) => {
    const option = document.createElement("option");
    option.value = slot;
    option.textContent = slot;
    slotSelect.appendChild(option);
  });
});

// Submit validation
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    nameInput.value.trim() === "" ||
    phoneInput.value.trim() === "" ||
    daySelect.value === "" ||
    slotSelect.value === ""
  ) {
    alert("⚠️ Please fill all the details before submitting");
    return;
  }

  alert("✅ Appointment booked successfully!");
});
