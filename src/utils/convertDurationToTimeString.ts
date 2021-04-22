export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0')) // Percorrer o array e pra cada elemento que tiver somente 1 digito, ele vai acrescentar o zero a esquerda
    .join(':')

  return timeString;
}