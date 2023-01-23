<script lang="ts">
	import InstagramIcon from '../assets/icons/instagram.svg';
	import FacebookIcon from '../assets/icons/facebook.svg';
	import TwitterIcon from '../assets/icons/twitter.svg';
</script>

<footer class="w-full border-t border-gray xl:px-40 px-20 pb-5">
	<div class="grid grid-cols-4 my-10">
		<ul class="flex flex-col gap-2">
			<li>Movies</li>
			<li>TV Series</li>
			<li>Animated Movies</li>
		</ul>
		<ul class="flex flex-col gap-2">
			<li>Privacy Policy</li>
			<li>Cookie Policy</li>
			<li>Terms of use</li>
		</ul>
		<ul class="flex flex-col gap-2">
			<li>Help centre</li>
			<li>Support</li>
			<li>FAQ</li>
		</ul>
		<div class="flex flex-col gap-2">
			<h4>Follow us</h4>
			<ul class="flex gap-5">
				<li class="w-10 h-10 rounded-full overflow-hidden">
					<img src={InstagramIcon} alt="" />
				</li>
				<li class="w-10 h-10 rounded-full overflow-hidden">
					<img src={FacebookIcon} alt="" />
				</li>
				<li class="w-10 h-10 rounded-full overflow-hidden">
					<img src={TwitterIcon} alt="" />
				</li>
			</ul>
		</div>
	</div>
</footer>

<style>
	li {
		@apply cursor-pointer;
	}
	li:hover {
		@apply opacity-80;
	}
</style>
