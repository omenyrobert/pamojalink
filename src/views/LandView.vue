<template>
	<div>
		<navbar />
		<div
			style="
				width: 100%;
				height: 80vh;
				background-size: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-image: url('https://res.cloudinary.com/dtlkiv19d/image/upload/v1659273740/Kallery/pamoja/pl1-min_ziesl2.jpg');
			"
		>
			<br />
			<br />

			<div
				class="p-5"
				style="background-color: rgba(0, 0, 0, 0.8); width: 400px"
			>
				<h1 class="text-white">Land</h1>
			</div>
			<br />
			<div style="display: flex; justify-content: center">
				<br />
				<input
					class="search"
					type="text"
					placeholder="Search Appartments, land, houses"
				/><i
					class="bi bi-search p-3"
					style="background-color: #b00808; color: #fff"
				></i>
			</div>
		</div>
		<br />
		<h3>Land For Sale</h3>
		<div class="row mx-5">
			<div class="col-md-3 p-3" v-for="house in houses" :key="house.id">
				<div style="height: 370px"
					class="border-2 cursor-pointer"
					id="card"
					role="button"
					data-bs-toggle="modal"
					:data-bs-target="`#details${house.id}`">
					<div>
						<img class="w-100" style="height: 250px; object-fit: cover" :src="house.photo" />
					</div>
					<div
						class="mt-2 mx-1 pb-2"
						style="
							display: flex;
							border-bottom: 1px #cccccc solid;
							justify-content: space-around;
						"
					>
						<div
							style="
								font-size: 13px;
								border-right: 1px #cccccc solid;
								width: 55%;
							"
							class="px-2"
						>
							{{ house.name }}
						</div>
						<div
							style="
								color: #b00808;
								width: 45%;
								font-weight: bold;
								font-size: 14px;
								padding-left: 7px;
							"
						>
							UGX{{ house.amount }}
						</div>
					</div>
					<div
						class="border-bottom-2 mx-1"
						style="display: flex; justify-content: space-around"
					>
						<div
							class="p-2"
							style="
								border-right: 1px #cccccc solid;
								width: 25%;
								font-size: 13px;
								text-align: center;
							"
						>
							<i class="bi bi-house" style="color: #b00808"></i><br />
							{{ house.bedrooms }}
						</div>
						<div
							class="p-2"
							style="
								border-right: 1px #cccccc solid;
								width: 50%;
								font-size: 13px;
								text-align: center;
							"
						>
							<i style="color: #b00808" class="bi bi-geo-alt"></i><br />
							{{ house.location }}
						</div>
						<div
							class="p-2"
							style="width: 25%; font-size: 13px; text-align: center"
						>
							<i class="bi bi-geo-fill" style="color: #b00808"></i><br />
							{{ house.land }}
						</div>
					</div>
				</div>
        <div
					class="modal fade"
					:id="`details${house.id}`"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-xl">
						<div class="modal-content">
							<div class="modal-header">
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div class="modal-body">
								<div class="row">
									<div class="col-md-6">
										<div
											id="carouselExampleControls"
											class="carousel slide"
											data-bs-ride="carousel"
										>
											<div class="carousel-indicators">
												<button
													type="button"
													data-bs-target="#carouselExampleIndicators"
													data-bs-slide-to="0"
													class="active"
													aria-current="true"
													aria-label="Slide 1"
												></button>
												<button
													type="button"
													data-bs-target="#carouselExampleIndicators"
													data-bs-slide-to="1"
													aria-label="Slide 2"
												></button>
												<button
													type="button"
													data-bs-target="#carouselExampleIndicators"
													data-bs-slide-to="2"
													aria-label="Slide 3"
												></button>
											</div>
											<div class="carousel-inner">
												<div class="carousel-item active">
													<img
														class="w-100"
														style="height: 350px; object-fit: cover"
														:src="house.photo"
													/>
												</div>
												<div class="carousel-item">
													<img
														class="w-100"
														style="height: 350px; object-fit: cover"
														:src="house.photo2"
													/>
												</div>
												<div class="carousel-item">
													<img
														class="w-100"
														style="height: 350px; object-fit: cover"
														:src="house.photo3"
													/>
												</div>
											</div>
											<button
												class="carousel-control-prev"
												type="button"
												data-bs-target="#carouselExampleControls"
												data-bs-slide="prev"
											>
												<span
													class="carousel-control-prev-icon"
													aria-hidden="true"
												></span>
												<span class="visually-hidden">Previous</span>
											</button>
											<button
												class="carousel-control-next"
												type="button"
												data-bs-target="#carouselExampleControls"
												data-bs-slide="next"
											>
												<span
													class="carousel-control-next-icon"
													aria-hidden="true"
												></span>
												<span class="visually-hidden">Next</span>
											</button>
										</div>
										<br />
										<div
											class="border-bottom-2 mx-1"
											style="display: flex; justify-content: space-around"
										>
											<div
												class="p-2"
												style="
													border-right: 1px #cccccc solid;
													width: 25%;
													font-size: 13px;
													text-align: center;
												"
											>
												<i class="bi bi-house" style="color: #b00808"></i><br />
												{{ house.bedrooms }}
											</div>
											<div
												class="p-2"
												style="
													border-right: 1px #cccccc solid;
													width: 50%;
													font-size: 13px;
													text-align: center;
												"
											>
												<i style="color: #b00808" class="bi bi-geo-alt"></i
												><br />
												{{ house.location }}
											</div>
											<div
												class="p-2"
												style="width: 25%; font-size: 13px; text-align: center"
											>
												<i class="bi bi-geo-fill" style="color: #b00808"></i
												><br />
												{{ house.land }}
											</div>
										</div>
									</div>
									<div class="col-md-6" style="text-align: left">
										<h3 style="color: #b00808">{{ house.name }}</h3>
										<br />
										<h6 style="color: #b00808">{{ house.land }}</h6>
										<h6 style="color: #b00808">{{ house.location }}</h6>
										<br />
										<p style="font-size: 12px">{{ house.description }}</p>
									</div>
								</div>

								<div class="modal-footer"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<compfooter />
	</div>
</template>

<script>
import navbar from "../components/navbar.vue";
import Compfooter from "../components/Compfooter.vue";

export default {
	name: "LandView",
	components: { Compfooter, navbar },
	data() {
		return {
			houses: [
				{
					id: 1,
					code: "PL001",
					code: "PL004",
					name: "Beach Land",
					amount: "1,600,000,000",
					bedrooms: "",
					land: "4 acres",
					location: "Entebbe, Kasanje",
					category: "Mortgage",
					description:
						"Location;Entebbe, Kasanje,  , 4 acres,  at 1.6 bn ugx, Ideal for Beach,Resort,Apartiments,Hotel,Gardens,School,Hospital,Residence. No incumbraces or third party claims.Free hold ready land tittle. Contact PamojaPropertylink, for More information / Inspection on  0776141212/ pamojachambers@gmail.com",
					photo:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669117556/pamoja11_wfpawh.jpg",
					photo2:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669117555/pamoja14_ju1y8y.jpg",
					photo3:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669117609/pamoja15_agiwor.jpg",
				},
				{
					id: 2,
					code: "PL002",
					name: "ALEISURE CENTRE",
					amount: "",
					bedrooms: "3",
					land: "I acre",
					location: "Town Council,Mawogola County,Ssembabule District",
					category: "Mortgage",
					description:
						"Semi finished flat house, developed gardens, Water and Power access, On the main road from Matete to Mbirizi town, good roads. Good for Entertainment, Leisure center, Lodgers. Serious buyers / inquiries, call 0776141212/ 0700141212.pamojachambers@gmail.com",
					photo2:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669100204/pamoja10_a1noim.jpg",
					photo3:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669099258/pamoja9_jwa8q0.jpg",
					photo4: "",
					photo:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669100198/pamoja8_boqgrn.jpg",
				},
				{
					id: 3,
					code: "PL001",
					name: "Land 50 *100 FT",
					amount: "20,000,000",
					bedrooms: "",
					land: "1/8TH ACRE",
					description:
						"Ready Land title and immediate land title transfer upon payment receipt, Located at Jagala town along Matuga - semito Road, Price is 20m. Near the Main Road/ 5 Minutes walk to the tamac, developed neighborhood, Power and water available, developed road network, in an estate, schools nearby. Hurry and buy",
					location: "block 53/Plot 3812, Land at Kyadondo, Wakiso",
					category: "Land",
					photo2: "",
					photo3: "",
					photo4: "",
					photo:
						"https://res.cloudinary.com/dtlkiv19d/image/upload/v1669098677/pamoja6_wgs85a.jpg",
				},
			],
		};
	},
};
</script>

<style>
.search {
	width: 50%;
	padding-left: 20px;
}
#card {
	box-shadow: 1px 2px 6px #888888;
}
#card:hover {
	box-shadow: 5px 10px 18px #888888;
	/* border: 10px #000 solid; */
}

@media only screen and (max-width: 600px) {
	#card {
		width: 140%;
		margin-left: -50px;
	}
	.search {
		width: 70%;
		padding-left: 10px;
	}
}
</style>
